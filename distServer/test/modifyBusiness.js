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

describe(' All Tests for modifying centres', function () {

    describe('Test to modify the category of a centre', function () {
        it('Ensures centres category can be modified', function (done) {
            var req = {
                body: {
                    catagory: 'Tech'
                }
            };
            _chai2.default.request(_app2.default).put('/api/v1/businesses/3').send(req.body).end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.be.equal('profile successfully modified');
                done();
            });
        });
    });
    describe('Test to modify the location of a business', function () {
        it('Ensures business location can be modified', function (done) {
            var req = {
                body: {
                    location: 'London'
                }
            };

            _chai2.default.request(_app2.default).put('/api/v1/businesses/3').send(req.body).end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.be.equal('profile successfully modified');
                done();
            });
        });
    });
});