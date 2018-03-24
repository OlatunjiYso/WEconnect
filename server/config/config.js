
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'olatunji',
    password: 5432,
    database: 'weconnect',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
/* development: {
    username: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },*/
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

