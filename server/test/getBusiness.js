import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe('All Tests for viewing all businesses', () => {
  describe('Test for viewing a particular business profile', () => {
    it('confirms response has 200 status code', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('profile');
          done();
        });
    });
  });

  describe('Test for viewing a particular non existing business profile', () => {
    it('confirms response has 400 status code', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/22222')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an('object');
          res.body.should.have.property('message');
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
  describe('Test for viewing all businesses in a particular location', () => {
    it('Ensures businesses in a specified location can be gotten', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/?location=lagos')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('Business');
          res.body.Business.should.be.an('array');
          done();
        });
    });
  });
  describe('Test for viewing all businesses in a particular category', () => {
    it('Ensures businesses in a specified category can be gotten', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/?category=fashion')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object');
          res.body.should.have.property('Business');
          res.body.Business.should.be.an('array');
          done();
        });
    });
  });
  describe('Test for viewing all businesses in a particular category and location', () => {
    it('Ensures businesses in a specified category and location can be gotten', (done) => {
      chai.request(app)
        .get('/api/v1/businesses/?location=abuja&category=fashion')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
