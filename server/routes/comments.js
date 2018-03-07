import express from 'express';

import commentController from '../controllers/comments';

const commentHandler = express.Router();
commentHandler.post('/:businessId/reviews', commentController.addComment);
commentHandler.get('/:businessId/reviews', commentController.getComments);

export default commentHandler;