import express from 'express';

import userController from '../controllers/user';
import validator from '../middleware/validations';
import authenticate from '../middleware/authentication';

const userHandler = express.Router();

userHandler.post(
    '/signup',
    validator.checkUsernameExistence,
    validator.checkEmailExistence,
    validator.validateSignup,
    userController.createUser
);

userHandler.post(
    '/login',
    validator.validatelogin,
    userController.login
);

userHandler.get(
    '/myBusiness',
    authenticate,
    userController.getMyBusinesses
);

userHandler.post(
    '/passwords',
    authenticate,
    validator.validatePasswordUpdate,
    userController.changePassword
);

export default userHandler;