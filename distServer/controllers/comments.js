'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _comment = require('../model/comment');

var _comment2 = _interopRequireDefault(_comment);

var _comments = require('../tables/comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Controller to handle :
     Adding a new comments,
     Getting all comments for a business
 */

var addComment = function addComment(req, res) {
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
    var businessId = parseInt(req.params.businessId, 10);
    var newComment = new _comment2.default(businessId, req.body.date, req.body.commentor, req.body.message);
    _comments2.default.push(newComment);
    return res.status(201).json({
        message: 'comment created successfully',
        comment: newComment
    });
};

var getComments = function getComments(req, res) {
    var concernedId = parseInt(req.params.businessId, 10);
    var myComments = _comments2.default.filter(function (eachComment) {
        return eachComment.BusinessId === concernedId;
    });
    if (myComments.length === 0) {
        return res.status(200).json({
            message: 'You have no comments yet'
        });
    }
    if (myComments.length > 0) {
        return res.status(200).json({
            message: 'here are your comments',
            Comments: myComments
        });
    }
};

var commentController = { addComment: addComment, getComments: getComments };

exports.default = commentController;