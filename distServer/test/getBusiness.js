'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expect = { chai: _chai2.default };

var should = _chai2.default.should();
_chai2.default.use(_chaiHttp2.default);

describe('All Tests for viewing all businesses', function () {
  describe('Test for viewing a particular business profile', function () {
    it('confirms response has 200 status code', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/businesses/2').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('profile');
        done();
      });
    });
  });

  describe('Test for viewing all businesses', function () {
    it('Ensures response is an object, has array of businesses and statusCode 200', function (done) {
      _chai2.default.request(_app2.default).get('/api/v1/businesses/').end(function (err, res) {
        res.should.have.status(200);
        res.body.should.be.an('object');
        res.body.should.have.property('businesses');
        res.body.businesses.should.be.an('array');
        done();
      });
    });
  });
});