
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DEVELOPMENT_DB,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.TEST_DB,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
production: {
  use_env_variable: process.env.ELEPHANT_URL,
  dialect: 'postgres'
  },
};

