'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _business = require('./routes/business');

var _business2 = _interopRequireDefault(_business);

var _comments = require('./routes/comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.use('/api/v1/businesses/', _comments2.default);
app.use('/api/v1/businesses/', _business2.default);

app.listen(3000, function () {
  console.log('I am running on port 3000');
});

exports.default = app;