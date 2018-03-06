import express from 'express';

import commentController from '../controllers/comments';

const commentHandler = express.Router();
commentHandler.post('/:businessId', commentController.addComment);
commentHandler.get('/:businessId', commentController.getComments);

export default commentHandler;