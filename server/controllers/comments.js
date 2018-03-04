/**
 * Controller to handle :
     Adding a new comments
 */

import Comment from '../model/comment';

import comments from '../tables/comments';


const addComment = (req, res) => {
    if (!req.body.businessId || req.body.businessId.trim().length === 0) {
      return res.status(400).json({
        message: 'businessId cannot be empty, please Input businessId.'
      });
    }
    if (!req.body.commentor || req.body.commentor.trim().length === 0) {
      return res.status(400).json({
        message: 'commentor field cannot be empty, please Input commentor field.'
      });
    }
    if (!req.body.message || req.body.message.trim().length === 0) {
      return res.status(400).json({
        message: 'message cannot be empty, please Input message.'
      });
    }
    if (!req.body.date || req.body.date.trim().length === 0) {
      return res.status(400).json({
        message: 'business location cannot be empty.'
      });
    }
    const businessId = parseInt(req.body.businessId, 10);
    const newComment = new Comment(businessId, req.body.date, req.body.commentor, req.body.messsage);
    comments.push(newComment);
    res.status(201).json({
       message: 'comment created successfully',
       comments
     });
  };

const commentController = { addComment };

export default commentController;