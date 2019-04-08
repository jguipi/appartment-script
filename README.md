# Appartment scraper script 
![Simpson house](https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/12/04/09/simpsons-house.jpg?width=668)

## Getting started

### Introduction 

Hi!
this is a apartment scrapper site that will help people found an apartment. With this script you can add criteria and it will generate URL that you can send to yourself via Sendgrid. It's build with Koa & Typescipt starter. 

### What is KOA?

Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.


### Setup (windows)
 1- [Download and Install the latest LTS version of nodeJS](https://nodejs.org/en/)
 
 2- Choose you prefered IDE. I recommend[Visual Studio Code](httpswww.jetbrains.comstudent) or [Webstorm](https://www.jetbrains.com/webstorm/)

 3- Clone this repo on your pc

 4- Open a terminal and execute : `npm install`
 
 5- Download and unzip the latest (Redis version)[https://github.com/dmajkic/redis/downloads]
 
 6- Create a `.env` file at the root of your project and create these variables : 
 
  SEND_MAIL_FROM = yourEmail@hotmail.com

  SEND_MAIL_TO = yourEmail@hotmail.com

  NODE_ENV = development

 5- Run the app with `npm run serve` and you will get generated link with a few recommandation :
 ![Link](https://github.com/jguipi/appartment-script/blob/master/img/1.JPG)
 
 ![url](https://github.com/jguipi/appartment-script/blob/master/img/2.JPG)
 
 6- Enjoy 😊!
 
### Setup Sendgrid (Optional)
 1- Create a [Sendgrid](https://firebase.google.com/) account and follow the get started guide.

 2- Add these variable to your `.env` file at the root of your project. You can find these value from SMTP relay setup in Sendgrid
 
  SENDGRID_USERNAME = 
  
  SENDGRID_PASSWORD = 
  
 3- Change `NODE_ENV` to production
  
 4- Enjoy :)
 
## Info 

### Website scraping from

- [x] Kijiji
- [ ] craigslist
- [ ] centris
- [ ] others

### Development language, framework and technologie
- Koa 
- TypeScript
- Node JS
- Express JS
- Nodemailer
- Redis

### Librarie

- [Express JS](https://expressjs.com/fr/)
- [Node JS](https://nodejs.org/en/)
- [Koa](https://koajs.com/#)
- [nodemailer](https://nodemailer.com/about/)

### Shout out 

- Thx to Alex G. for the help

