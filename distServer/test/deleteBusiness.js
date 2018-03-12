'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var should = _chai2.default.should();
_chai2.default.use(_chaiHttp2.default);

describe(' All Tests for deleting centres', function () {
    describe('Test to delete an existing centre', function () {
        it('Ensures existing centres can be deleted', function (done) {
            _chai2.default.request(_app2.default).delete('/api/v1/businesses/5').end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('message');
                res.body.message.should.be.equal('profile successfully deleted');
                done();
            });
        });
    });
});