import express from 'express';

import reviewController from '../controllers/review';
import validator from '../middleware/validations';
import authenticate from '../middleware/authentication';

const reviewHandler = express.Router();

reviewHandler.post(
    '/:businessId/reviews',
    authenticate,
    validator.checkBusinessExistence,
    validator.validatebusinessReview,
     reviewController.createReview
    );

reviewHandler.get(
    '/:businessId/reviews',
    validator.checkBusinessExistence,
     reviewController.getReview
    );

export default reviewHandler;