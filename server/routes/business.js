import express from 'express';

import businessController from '../controllers/business';

const businessHandler = express.Router();

businessHandler.post('/', businessController.addCenter);
businessHandler.put('/:id', businessController.modifyBusinessProfile);

export default businessHandler;