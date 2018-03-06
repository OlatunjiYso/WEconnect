import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const expect = { chai };

const should = chai.should();
chai.use(chaiHttp);

describe('All Tests for viewing all businesses', () => {
  describe('Test for viewing a particular business profile', () => {
    it('confirms response has 200 status code', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/2')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('profile');
          done();
        });
    });
  });

  describe('Test for viewing all businesses', () => {
    it('Ensures response is an object, has array of businesses and statusCode 200', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('businesses');
          res.body.businesses.should.be.an('array');
          done();
        });
    });
  });
});
