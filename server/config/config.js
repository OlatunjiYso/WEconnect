
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB,
    host: process.env.LOCAL_HOST,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.TEST_DB,
    host: process.env.LOCAL_HOST,
    dialect: process.env.DB_DIALECT
  },
production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.PRODUCTION_DB,
    host: process.env.LOCAL_HOST,
    dialect: process.env.DB_DIALECT
  },
};
