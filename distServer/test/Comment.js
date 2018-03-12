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

describe(' All Tests for posting a comment to a business', function () {
    describe('Test to get a business reviews', function () {
        it('Ensures comments of a business can be gotten', function (done) {
            _chai2.default.request(_app2.default).get('/api/v1/businesses/2/reviews/').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                done();
            });
        });
    });
    describe('Test to add an empty comment', function () {
        it('Ensures comments must not be empty', function (done) {
            var req = {
                body: {
                    businessId: '2',
                    date: '1st may',
                    commentor: null,
                    message: 'Awesome Awesome'
                }
            };
            _chai2.default.request(_app2.default).post('/api/v1/businesses/2/reviews/').send(req.body).end(function (err, res) {
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                done();
            });
        });
    });
    describe('Test to add a comment with no commentor', function () {
        it('Ensures comments have commentor', function (done) {
            var req = {
                body: {
                    businessId: '2',
                    date: '1st may',
                    commentor: null,
                    message: 'Awesome Awesome'
                }
            };

            _chai2.default.request(_app2.default).post('/api/v1/businesses/2/reviews').send(req.body).end(function (err, res) {
                res.should.have.status(400);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.be.equal('commentor field cannot be empty, please Input commentor field.');
                done();
            });
        });
    });

    describe('Test to add an event with all fields correctly filled', function () {
        it('Ensures events will correct parameters would be added', function (done) {
            var req = {
                body: {
                    businessId: '2',
                    date: '1st may',
                    commentor: 'debo',
                    message: 'megamega super'

                }
            };

            _chai2.default.request(_app2.default).post('/api/v1/businesses/2/reviews').send(req.body).end(function (err, res) {
                res.should.have.status(201);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.be.equal('comment created successfully');
                done();
            });
        });
    });
});