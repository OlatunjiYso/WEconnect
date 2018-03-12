'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _business = require('../controllers/business');

var _business2 = _interopRequireDefault(_business);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var businessHandler = _express2.default.Router();

businessHandler.get('/:id', _business2.default.getBusiness);
businessHandler.get('/', _business2.default.getBusinesses);
businessHandler.post('/', _business2.default.addBusiness);
businessHandler.put('/:id', _business2.default.modifyBusinessProfile);
businessHandler.delete('/:id', _business2.default.deleteBusiness);
exports.default = businessHandler;