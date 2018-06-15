
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
  localTest: {
    username: process.env.LOCAL_TEST_DB_USERNAME,
    password: process.env.LOCAL_TEST_DB_PASSWORD,
    database: process.env.LOCAL_TEST_DB,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'TEST_DATABASE_URL',
    dialect: 'postgres',
    logging: false
  },
  production: {
    use_env_variable: 'PROD_DATABASE_URL',
    dialect: 'postgres',
    logging: false
  }
};

