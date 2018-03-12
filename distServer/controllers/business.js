'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _business = require('../model/business');

var _business2 = _interopRequireDefault(_business);

var _businesses = require('../tables/businesses');

var _businesses2 = _interopRequireDefault(_businesses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Controllers to handle :
            Adding a new business,
            Modifying business profile
            Deleting a business,
            Getting a business,
            Getting all business
            Getting business by category
            Getting business by location
 */

var addBusiness = function addBusiness(req, res) {
  var arrayOfId = _businesses2.default.map(function (business) {
    return business.id;
  });
  var businessId = parseInt(req.body.id, 10);
  if (arrayOfId.indexOf(businessId) !== -1) {
    return res.status(400).json({
      message: 'A business with this Id already exist, please choose another Id'
    });
  }
  if (!req.body.id || req.body.id.trim().length === 0) {
    return res.status(400).json({
      message: 'businessId cannot be empty, please Input Id.'
    });
  }
  if (!req.body.title || req.body.title.trim().length === 0) {
    return res.status(400).json({
      message: 'business title cannot be empty, please Input business title.'
    });
  }
  if (!req.body.category || req.body.category.trim().length === 0) {
    return res.status(400).json({
      message: 'business category cannot be empty, please Input business category.'
    });
  }
  if (!req.body.location || req.body.location.trim().length === 0) {
    return res.status(400).json({
      message: 'business location cannot be empty, please Input business location.'
    });
  }
  var id = parseInt(req.body.id, 10);
  var newBusiness = new _business2.default(id, req.body.title, req.body.category, req.body.location);
  _businesses2.default.push(newBusiness);
  res.status(201).json({
    message: 'business created successfully',
    businesses: _businesses2.default
  });
};

var modifyBusinessProfile = function modifyBusinessProfile(req, res) {
  var businessId = parseInt(req.params.id, 10);
  var arrayOfId = _businesses2.default.map(function (business) {
    return business.id;
  });
  if (arrayOfId.indexOf(businessId) < 0) {
    return res.status(404).json({
      message: 'no business exist with specified id'
    });
  }
  var indexToBeModified = arrayOfId.indexOf(businessId);
  if (req.body.id) {
    return res.status(400).json({
      message: 'Business Id cannot be changed!'
    });
  }
  if (req.body.title) {
    _businesses2.default[indexToBeModified].title = req.body.title;
  }
  if (req.body.category) {
    _businesses2.default[indexToBeModified].category = req.body.category;
  }
  if (req.body.location) {
    _businesses2.default[indexToBeModified].location = req.body.location;
  }
  return res.status(200).json({
    message: 'profile successfully modified',
    Now: _businesses2.default[indexToBeModified]
  });
};

var deleteBusiness = function deleteBusiness(req, res) {
  var businessId = parseInt(req.params.id, 10);
  var arrayOfId = _businesses2.default.map(function (business) {
    return business.id;
  });
  if (arrayOfId.indexOf(businessId) < 0) {
    return res.status(404).json({
      message: 'profile with specified id not found'
    });
  }
  var indexToBePopped = arrayOfId.indexOf(businessId);
  _businesses2.default.splice(indexToBePopped, 1);
  return res.status(200).json({
    message: 'profile successfully deleted'
  });
};

var getBusinesses = function getBusinesses(req, res) {
  if (req.query.location) {
    var desiredLocation = req.query.location;
    var matches = _businesses2.default.filter(function (business) {
      return business.location === desiredLocation;
    });
    if (matches.length === 0) {
      return res.status(200).json({
        message: 'No matching business'
      });
    }
    return res.status(200).json({
      Business: matches
    });
  }
  if (req.query.category) {
    var desiredCategory = req.query.category;
    var _matches = _businesses2.default.filter(function (business) {
      return business.category === desiredCategory;
    });
    if (_matches.length === 0) {
      return res.status(200).json({
        message: 'No matching business'
      });
    }
    return res.status(200).json({
      Business: _matches
    });
  }
  if (_businesses2.default.length === 0) {
    return res.status(200).json({
      message: 'No Businesses yet'
    });
  }
  return res.status(200).json({
    businesses: _businesses2.default
  });
};

var getBusiness = function getBusiness(req, res) {
  var businessId = parseInt(req.params.id, 10);
  var arrayOfId = _businesses2.default.map(function (business) {
    return business.id;
  });
  if (arrayOfId.indexOf(businessId) < 0) {
    return res.status(404).json({
      message: 'profile with specified id not found'
    });
  }
  var profile = _businesses2.default.filter(function (business) {
    return business.id === businessId;
  });
  return res.status(200).json({
    profile: profile
  });
};

var businessController = {
  addBusiness: addBusiness,
  modifyBusinessProfile: modifyBusinessProfile,
  deleteBusiness: deleteBusiness,
  getBusinesses: getBusinesses,
  getBusiness: getBusiness
};

exports.default = businessController;