/**
 * Controller to handle :
     Adding a new comments,
     Getting all comments for a business
 */

import Comment from '../model/comment';

import comments from '../tables/comments';


const addComment = (req, res) => {
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