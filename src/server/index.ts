import dotenv from 'dotenv';
dotenv.config();
import * as kijiji from 'kijiji-scraper';
import Koa from 'koa';
import { logger } from './logging';
import { getTestMessageUrl, sendMailAsync } from './mailer';
import { saddAsync, smembersAsync } from './redis';
import { routes } from './routes';

const app = new Koa();

app.use(logger);
app.use(routes);

app.listen(3000);

console.log(`Server running on port ${3000}`);
console.log(`NODE_ENV is set to ${process.env.NODE_ENV}`);

const options = {
  minResults: 20,
  scrapeResultDetails: false,
};

const params = {
	categoryId: 37,
	locationId: 1700281,
	maxPrice: 1100,
	minPrice: 800,
	sortByName: 'dateDesc',
};

let counter = 0;

const searchTerms = [
	'sherbrooke',
	'village',
	'quartier-des-spectacles',
	'uqam',
	'berri-uqam',
	'ville-marie',
	'plateau',
	'berry',
	'laurier',
	'mont-royal',
	'montroyal',
];

// Scrape using returned promise
setInterval(async () => {
  try {
    const searchTerm = searchTerms[counter % searchTerms.length];
    let ads = await kijiji.search({ ...params, keywords: searchTerm }, options);
    ads = ads.map((ad: any) => ({ ...ad, id: ad.url.substr(ad.url.lastIndexOf('/') + 1) }));
    const oldAds = await smembersAsync('seen_ads');

    const newAds = ads.filter((ad: any) => !oldAds.includes(ad.id));
    if (newAds.length) {
      const info = await sendMailAsync({
        from: process.env.SEND_MAIL_FROM, // sender address
        html: `<div>I found an apartment (in ${searchTerm}) for ya:${newAds.reduce((carry: string, newAd: any) => {
          return carry + `<br /><br/><a href="${newAd.url}">${newAd.url}</a>`;
        }, '')}</div>`, // html body
        subject: 'New apartment found', // Subject line
        text: `I found an apartment (in ${searchTerm}) for ya ${newAds.reduce((carry: string, newAd: any) => {
          return carry + `${newAd.url}, `;
        }, '')}`, // plain text body,
        to: process.env.SEND_MAIL_TO, // list of receivers
      });

      await saddAsync('seen_ads', ...newAds.map((newAd: any) => newAd.id));

      console.log(`Preview URL: ${getTestMessageUrl(info)}`);
    }

  } catch (e) {
    console.log(e);
  }

  counter += 1;
}, 10000);

export { app };
