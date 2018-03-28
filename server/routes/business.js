import express from 'express';

import businessController from '../controllers/business';
import validator from '../middleware/validations';
import authenticate from '../middleware/authentication';
import confirmOwnership from '../middleware/authorization';

const businessHandler = express.Router();

businessHandler.get('/', businessController.getAllBusinesses);

businessHandler.get(
    '/mybusinesses',
    authenticate,
    businessController.getBusiness
);

businessHandler.get(
    '/:businessId',
    validator.checkBusinessExistence,
    businessController.getBusiness
);

businessHandler.post(
    '/',
    authenticate,
    validator.validatebusinessRegistration,
    validator.checkBusinessNameExistence,
    validator.checkBusinessEmailExistence,
    businessController.createBusiness
);

businessHandler.put(
    '/:businessId',
    authenticate,
    confirmOwnership,
    validator.validatebusinessUpdate,
    businessController.modifyBusiness
);

businessHandler.delete(
    '/:businessId',
    authenticate,
    confirmOwnership,
    businessController.deleteBusiness
);


export default businessHandler;