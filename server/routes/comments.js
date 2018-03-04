import express from 'express';

import commentController from '../controllers/comments';

const commentHandler = express.Router();
commentHandler.post('/', commentController.addComment);

export default commentHandler;