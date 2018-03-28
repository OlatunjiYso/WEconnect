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

reviewHandler.put(
    '/:businessId/reviews/:reviewId',
    authenticate,
    validator.checkBusinessExistence,
    validator.validateBusinessReviewUpdate,
    reviewController.updateReview
);

reviewHandler.delete(
    '/:businessId/reviews/:reviewId',
    authenticate,
    validator.checkBusinessExistence,
    reviewController.deleteReview
);

reviewHandler.get(
    '/:businessId/reviews',
    validator.checkBusinessExistence,
    reviewController.getReview
);

export default reviewHandler;