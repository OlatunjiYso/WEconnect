import express from 'express';

import businessController from '../controllers/business';
import validator from '../middleware/validations';
import authenticate from '../middleware/authentication';
import confirmOwnership from '../middleware/authorization';
import passwordCheck from '../middleware/passwordCheck';

const businessHandler = express.Router();

businessHandler.get('/', businessController.getAllBusinesses);

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
    validator.checkBusinessNameExistence,
    validator.checkBusinessEmailExistence,
    validator.validateBusinessUpdate,
    businessController.modifyBusiness
);

businessHandler.delete(
    '/:businessId',
    authenticate,
    confirmOwnership,
    passwordCheck,
    businessController.deleteBusiness
);


export default businessHandler;