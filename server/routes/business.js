import express from 'express';

import businessController from '../controllers/business';

const businessHandler = express.Router();

businessHandler.post('/', businessController.addCenter);
businessHandler.put('/:id', businessController.modifyBusinessProfile);
businessHandler.delete('/:id', businessController.deleteBusiness);

export default businessHandler;