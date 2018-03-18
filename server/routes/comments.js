import express from 'express';

import commentController from '../controllers/comments';

import validator from '../middlewares/validator';

const commentHandler = express.Router();
commentHandler.post(
    '/:businessId/reviews',
    validator.verifyBusinessParamIsNumber,
    validator.checkBusinessExistence,
    validator.validateReview,
    commentController.addComment
);
commentHandler.get(
    '/:businessId/reviews',
    validator.checkBusinessExistence,
    commentController.getComments
);

export default commentHandler;