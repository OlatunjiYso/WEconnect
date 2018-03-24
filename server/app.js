import express from 'express';

import bodyParser from 'body-parser';

import dotenv from 'dotenv';

import expressValidator from 'express-validator';

import businessHandler from './routes/business';
import reviewHandler from './routes/review';
import userHandler from './routes/user';
import home from './routes/home';
// Load config files
dotenv.config();
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/api/v1/businesses/', reviewHandler);
app.use('/api/v1/businesses/', businessHandler);
app.use('/api/v1/auth/', userHandler);
app.use('/', home);

app.listen(process.env.PORT || 3000, () => {
  console.log('I am running on port 3000');
});

export default app;
