[![Build Status](https://travis-ci.org/OlatunjiYso/WEconnect.svg?branch=api-dummy-data)](https://travis-ci.org/OlatunjiYso/WEconnect)
[![Coverage Status](https://coveralls.io/repos/github/OlatunjYso/WEconnect/badge.svg?branch=api-dummy-data)](https://coveralls.io/github/OlatunjiYso/WEconnect?branch=api-dummy-data)

# WEconnect
WEconnect is a business enterprise application that connects clients to businesses.

## Features
- Create/Add businesses
- modify businesses
- delete businesses
- View all businesses
- View details of a business
- Post reviews on businesses


## UI Templates
To View online hosted templates, copy and paste the following link in your browser
[WEconnect] - https://OlatunjiYso.github.io/WEconnect/template/index.html 

## Installation
- install POSTMAN app
- run `npm run start` then navigate to `localhost:3000` on POSTMAN

## API Routes
* [Add Business] - POST http://localhost:3000/api/v1/businesses/
* [Modify Business] - PUT http://localhost:3000/api/v1/businesses/:businessId
* [View Business Details] - GET http://localhost:3000/api/v1/businesses/:businessId
* [Delete Business] - DELETE http://localhost:3000/api/v1/businesses/:businessId
* [Fetch All Recipes] - GET http://localhost:3000/api/v1/businesses
* [Post Business Review] - POST http://localhost:3000/api/v1/businesses/:businessId/reviews
* [Get Business Reviews] - GET  http://localhost:3000/api/v1/businesses/:businessId/reviews
* [Fetch Businesses by Location] - POSThttp://localhost:3000/api/v1/businesses/?location
* [Fetch Businesses by Category] - POSThttp://localhost:3000/api/v1/businesses/?category

## Author
* **Olatunji Yusuf** -Aspiring Software Developer.

## Acknowledgments
* MATERIALIZE
* Jquery
* Javascript
* Express JS