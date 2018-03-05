import express from 'express';

import businessController from '../controllers/business';

const businessHandler = express.Router();

businessHandler.get('/', businessController.getBusiness);
businessHandler.post('/', businessController.addBusiness);
businessHandler.put('/:id', businessController.modifyBusinessProfile);
businessHandler.delete('/:id', businessController.deleteBusiness);

export default businessHandler;