import express from 'express';

import businessController from '../controllers/business';

const businessHandler = express.Router();

businessHandler.post('/', businessController.addCenter);

export default businessHandler;