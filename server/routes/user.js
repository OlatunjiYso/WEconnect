import express from 'express';

import userController from '../controllers/user';

import validator from '../middlewares/validator';

const userHandler = express.Router();

userHandler.post(
    '/signup',
    validator.checkUsernameExistence,
    validator.checkEmailExistence,
    validator.validateSignup,
    userController.addUser
);
userHandler.get(
    '/',
    userController.handleError
);
userHandler.post(
    '/login',
    validator.validatelogin,
    userController.login
);

userHandler.get(
    '/all',
    userController.getUser
);


export default userHandler;