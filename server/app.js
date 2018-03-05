import express from 'express';

import bodyParser from 'body-parser';

import businessHandler from './routes/business';
import commentHandler from './routes/comments';

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('i am listening');
});

app.use('/api/v1/businesses/reviews/:businessId', commentHandler);
app.use('/api/v1/businesses/', businessHandler);

app.listen(3000, () => {
  console.log('I am running on port 3000');
});

export default app;
