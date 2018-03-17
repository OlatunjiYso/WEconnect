import express from 'express';

import businessController from '../controllers/business';

import validator from '../middlewares/validator';

const businessHandler = express.Router();

businessHandler.get(
    '/:businessId',
    validator.verifyBusinessParamIsNumber,
    validator.checkBusinessExistence,
    businessController.getBusiness
);

businessHandler.get('/', businessController.getBusinesses);

businessHandler.post(
    '/',
    validator.validatebusinessRegistration,
    businessController.addBusiness
);
businessHandler.put(
    '/:id',
    validator.verifyBusinessParamIsNumber,
    validator.checkBusinessExistence,
    validator.validatebusinessRegistration,
    businessController.modifyBusinessProfile
);
businessHandler.delete(
    '/:id',
    validator.verifyBusinessParamIsNumber,
    validator.checkBusinessExistence,
     businessController.deleteBusiness
    );
export default businessHandler;