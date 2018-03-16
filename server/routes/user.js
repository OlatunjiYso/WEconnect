import express from 'express';

import userController from '../controllers/user';

const userHandler = express.Router();

userHandler.post('/auth/signup', userController.addUser);
userHandler.post('/auth/login', userController.login);

export default userHandler;