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

describe(' All Tests for adding a new business', function () {
    describe('Test to add a business with no title', function () {
        it('Ensures business must have a title', function (done) {
            var req = {
                body: {
                    id: '14',
                    title: null,
                    category: 'Fashion',
                    location: 'Lagos'
                }
            };

            _chai2.default.request(_app2.default).post('/api/v1/businesses/').send(req.body).end(function (err, res) {
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                done();
            });
        });
    });
    describe('Test to add a business with no location', function () {
        it('Ensures registered business must have a location', function (done) {
            var req = {
                body: {
                    id: '24',
                    title: 'Scissors',
                    category: 'Fashion',
                    location: null
                }
            };
            _chai2.default.request(_app2.default).post('/api/v1/businesses/').send(req.body).end(function (err, res) {
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                done();
            });
        });
    });
    describe('Test to add a business with no category', function () {
        it('Ensures business must belong to a category', function (done) {
            var req = {
                body: {
                    id: '14',
                    title: 'Scissors',
                    category: null,
                    location: 'Lagos'
                }
            };

            _chai2.default.request(_app2.default).post('/api/v1/businesses/').send(req.body).end(function (err, res) {
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                done();
            });
        });
    });
    describe('Test to add a business with all parameters as expected', function () {
        it('Ensures businesses are added when all fields are supplied', function (done) {
            var req = {
                body: {
                    id: '14',
                    title: 'Scissirs',
                    category: 'Fashion',
                    location: 'Lagos'
                }
            };

            _chai2.default.request(_app2.default).post('/api/v1/businesses/').send(req.body).end(function (err, res) {
                res.should.have.status(201);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.be.equal('business created successfully');
                done();
            });
        });
    });
});