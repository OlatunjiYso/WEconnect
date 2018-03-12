'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _comments = require('../controllers/comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentHandler = _express2.default.Router();
commentHandler.post('/:businessId/reviews', _comments2.default.addComment);
commentHandler.get('/:businessId/reviews', _comments2.default.getComments);

exports.default = commentHandler;