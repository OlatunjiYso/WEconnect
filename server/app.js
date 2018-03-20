import express from 'express';

import bodyParser from 'body-parser';

import expressValidator from 'express-validator';

import businessHandler from './routes/business';
import commentHandler from './routes/comments';
import userHandler from './routes/user';

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

app.use('/api/v1/auth/', userHandler);
app.use('/api/v1/businesses/', commentHandler);
app.use('/api/v1/businesses/', businessHandler);
app.use('/', userHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('I am running on port 3000');
});

export default app;
