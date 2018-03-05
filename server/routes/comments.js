import express from 'express';

import commentController from '../controllers/comments';

const commentHandler = express.Router();
commentHandler.post('/', commentController.addComment);
commentHandler.get('/', commentController.getComments);

export default commentHandler;