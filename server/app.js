import express from 'express';

import webpack from 'webpack';

import webpackMiddleware from 'webpack-dev-middleware';

import webpackHotMiddleware from 'webpack-hot-middleware';

import bodyParser from 'body-parser';

import dotenv from 'dotenv';

import path from 'path';

import expressValidator from 'express-validator';

import swaggerUi from 'swagger-ui-express';

import YAML from 'yamljs';

import businessHandler from './routes/business';
import reviewHandler from './routes/review';
import userHandler from './routes/user';
import home from './routes/home';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);

const indexFile = path.join(__dirname, '../client/src/index.html');

const swaggerDocument = YAML.load('./swagger.yaml');
// Load config files
dotenv.config();
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));
app.use(expressValidator());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token');
  next();
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1/businesses/', reviewHandler);
app.use('/api/v1/businesses/', businessHandler);
app.use('/api/v1/auth/', userHandler);
app.use('/api/v1/*', home);

app.get('/*', (req, res) => {
  res.sendFile(indexFile, (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'not Found' });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('I am running on port 3000');
});

export default app;
