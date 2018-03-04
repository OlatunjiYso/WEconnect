import express from 'express';

import bodyParser from 'body-parser';

const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('I am running on port 3000');
});

export default app;
