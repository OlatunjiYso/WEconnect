[![Build Status](https://travis-ci.org/OlatunjiYso/WEconnect.svg?branch=api-dummy-data)](https://travis-ci.org/OlatunjiYso/WEconnect)
[![Coverage Status](https://coveralls.io/repos/github/OlatunjiYso/WEconnect/badge.svg?branch=heroku-production)](https://coveralls.io/github/OlatunjiYso/WEconnect?branch=heroku-production)
[![Maintainability](https://api.codeclimate.com/v1/badges/fcda4d1c366919745e67/maintainability)](https://codeclimate.com/github/OlatunjiYso/WEconnect/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fcda4d1c366919745e67/test_coverage)](https://codeclimate.com/github/OlatunjiYso/WEconnect/test_coverage)

# WEconnect
WEconnect is a business listing application.

#### Hosting
[live app](https://weconnect-main.herokuapp.com/)


### Application Features

- Viewing all businesses
- View a particular business
- Creating a business
- Updating a business
- Posting reviews on businesses
- Editing and deleting reviews
- Fetching own business



### Technologies
- NodeJS
- Express JS
- Sequelize ORM
- PostgreSQL
- Mocha
- React
- Redux




### Installation and setup
- Clone this repository
- Install all depencies with `npm install`
- Globally install `sequelize-cli`
- Run database migrations using `sequelize db:migrate`
- Start the server by running `npm run start:dev`




### API Endpoints

|        ENDPOINT / PATH                              |    HTTP VERB      |             Purpose                |
|-----------------------------------------------------|:-----------------:|:----------------------------------:|
|  /api/v1/auth/signup                                |    POST           | signs up a new user .              |       
|  /api/v1/auth/login                                 |    POST           | Fetches all locations.             | 
|  /api/v1/auth/passwords                             |    POST           | Resets password                    | 
|  /api/v1/businesses                                 |    POST           | Adds a new business                |
|  /api/v1/businesses/:businessId                     |    PUT            | updates a specified business       |
|  /api/v1/businesses/:businessId                     |    GET            | view a specified business          |       
|  /api/v1/businesses/:businessId                     |    DELETE         | Deletes a specified business.      | 
|  /api/v1/businesses?category&&?location             |    GET            | View all businesses                | 
|  /api/v1/businesses/:businessId/reviews             |    POST           | Adds a business review             |
|  /api/v1/businesses/:businessId/reviews             |    GET            | Fetches business reviews           |
|  /api/v1/businesses/:businessId/reviews/reviewId    |    UPDATE         | Updates a business review.         | 
|  /api/v1/businesses/:businessId/reviews/reviewId    |    DELETE         | Deletes a business reviewsinesses  | 
|  /api/v1/businesses/:businessId/reviews             |    POST           | Adds a business review             |
|  /api/v1/businesses/:businessId/reviews             |    GET            | Fetches business reviews           |





### Developed by
 *Olatunji Yusuf*

