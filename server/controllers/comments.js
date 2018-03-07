/**
 * Controller to handle :
     Adding a new comments,
     Getting all comments for a business
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
            message: 'date cannot be empty.'
        });
    }
    const businessId = parseInt(req.params.businessId, 10);
    const newComment = new Comment(businessId, req.body.date, req.body.commentor, req.body.message);
    comments.push(newComment);
    return res.status(201).json({
        message: 'comment created successfully',
        comment: newComment
    });
};

const getComments = (req, res) => {
    const concernedId = parseInt(req.params.businessId, 10);
    const myComments = comments.filter(eachComment => eachComment.BusinessId === concernedId);
    if (myComments.length === 0) {
        return res.status(200).json({
            message: 'You have no comments yet',
        });
    }
    if (myComments.length > 0) {
        return res.status(200).json({
            message: 'here are your comments',
            Comments: myComments
        });
    }
};

const commentController = { addComment, getComments };

export default commentController;