[![Build Status](https://travis-ci.org/OlatunjiYso/WEconnect.svg?branch=api-dummy-data)](https://travis-ci.org/OlatunjiYso/WEconnect)
[![Coverage Status](https://coveralls.io/repos/github/OlatunjiYso/WEconnect/badge.svg?branch=heroku-production)](https://coveralls.io/github/OlatunjiYso/WEconnect?branch=heroku-production)
[![Maintainability](https://api.codeclimate.com/v1/badges/fcda4d1c366919745e67/maintainability)](https://codeclimate.com/github/OlatunjiYso/WEconnect/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fcda4d1c366919745e67/test_coverage)](https://codeclimate.com/github/OlatunjiYso/WEconnect/test_coverage)

# WEconnect
WEconnect is a business enterprise application that connects clients to businesses.

###### Application Features
WeConnet offers so much to the enterprenuers, business owners customers and potential client. WEconnect makes the task of getting clients paired to business so seamless
- Create a Business
- Update their own business
- Post a review about a business
- Edit and delete thier own review
- Get the business which they added
- View all businesses
- View a particular business details
- Register to have access to more features


## Users who are yet to register can only do the following
- View all businesses
- View a particular business details
- Register to have access to more features

## Registered Users can
- Change their password
- Create a Business
- Update their own business
- Post a review about a business
- Edit and delete thier own review
- Get the business which they added
- Delete a business

# Technologies
### Backend
- [NodeJS](http://nodejs.org/en) is a JavaScript runtime built on Chrome's V8 JavaScript engine
- [Express JS](http://express.com) A minimalist web framework
- [Sequelize](http://docs.sequelizejs.com/) Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
- [PostgreSQL](https://www.postgresql.org/) A powerful, open source object-relational database system.
- [ESLint](eslint.org) provides a pluggable linting utility for JavaScript.
- [Mocha](https://mochajs.org/) Mocha is a feature-rich JavaScript test framework running on [NodeJS](nodejs.org/en) for testing [Javascript](javascript.com) applications.

### Frontend
- [Bootstrap](https://getbootstrap.com/) makes styling responsive web pages faster and easier.
- [React](https://facebook.github.io/react/) A JavaScript library for building user interfaces.
- [Redux](http://redux.js.org/) A predictable state container for JavaScript apps.
- [Webpack](https://webpack.js.org/) A JavaScript tool for bundling scripts, images, styles and other assets
- [Babel](https://babeljs.io/) A JavaScript compiler for converting codes written in ES6 or JSX to ES5 that is supported by many browsers

## Installation
- Install [NodeJS](http://nodejs.org/en) and [PostgreSQL](https://www.postgresql.org/) on your computer
- Clone this repository
- Navigate to the directoty
- Install all depencies with ```npm install``` on root directory
- Globally install ```sequelize-cli```
- Using ```sequelize db:migrate``` migrate the database
- Start the server by running ```npm run start:dev```


## UI Templates
To View online hosted templates, copy and paste the following link in your browser
[WEconnect] - https://OlatunjiYso.github.io/WEconnect/template/index.html 

## API Routes
* [Signup] - POST https://weconnect-main.herokuapp.com/api/v1/auth/signup
* [Login] - POST https://weconnect-main.herokuapp.com/api/v1/auth/login
* [change password] POST https://weconnect-main.herokuapp.com/api/v1/auth/passwords
* [Add Business] -   POST https://weconnect-main.herokuapp.com/api/v1/businesses
* [Modify Business] - PUT https://weconnect-main.herokuapp.com/api/v1/businesses/:businessId
* [View Business Details] - GET https://weconnect-main.herokuapp.com/api/v1/businesses/:businessId
* [Delete Business] - DELETE https://weconnect-main.herokuapp.com/api/v1/businesses/:businessId
* [Fetch All Businesses] - GET https://weconnect-main.herokuapp.com/api/v1/businesses
* [Post Business Review] - POST https://weconnect-main.herokuapp.com/api/v1/businesses/:businessId/reviews
* [Get Business Reviews] - GET  http://localhost:3000/api/v1/businesses/:businessId/reviews
* [Update Business Reviews] - PUT  http://localhost:3000/api/v1/businesses/:businessId/reviews
* [Delete Business Reviews] -DELETE  http://localhost:3000/api/v1/businesses/:businessId/reviews
* [Fetch Businesses by Location] - POST https://weconnect-main.herokuapp.com/api/v1/businesses?location
* [Fetch Businesses by Category] - POST https://weconnect-main.herokuapp.com/api/v1/businesses?category

## Author
* **Olatunji Yusuf** -Aspiring Software Developer.

