'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _comment = require('../model/comment');

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = [new _comment2.default(1, '01-02-2018', 'Ayo', 'very very good'), new _comment2.default(1, '11-02-2018', 'John', ' good'), new _comment2.default(2, '21-02-2018', 'Doe', 'excellent'), new _comment2.default(2, '05-02-2018', 'Phil', 'fantabulous'), new _comment2.default(4, '09-02-2018', 'Drey', 'shabalala'), new _comment2.default(5, '21-02-2018', 'Bananbas', 'very very good'), new _comment2.default(3, '10-02-2018', 'Krill', 'very very good'), new _comment2.default(3, '15-02-2018', 'Lukaku', 'very very good'), new _comment2.default(6, '18-02-2018', 'Mourinho', 'very very good')];

exports.default = Comments;