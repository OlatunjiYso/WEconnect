import chai from 'chai';

import chaiHttp from 'chai-http';
import db from '../models/index';
import app from '../app';
import testData from './testdata';

const { expect } = chai;
chai.use(chaiHttp);

const { Business } = db;
const rootEndpoint = '/api/v1/businesses';
let authToken;

describe(' All Tests for businesses', () => {
    beforeEach((done) => {
        db.sequelize.sync({ force: true }) // drops table and re-creates it
            .then(() => {
                chai.request(app)
                    .post('/api/v1/auth/signup')
                    .send(testData.userDetails)
                    .end((err) => {
                        done();
                    });
            });
    });
     describe('Test for adding a reviews', () => {
         beforeEach((done) => {
             chai.request(app)
                 .post('/api/v1/auth/login')
                 .send({ username: 'wonderguy', password: 'wonderguy' })
                 .end((err, res) => {
                     authToken = res.body.token;
                     done();
                 });
         });
         beforeEach((done) => {
            Business.create(testData.businessDetails)
                .then(() => Promise.resolve(done()))
                .catch(err => Promise.reject(done(err)));
        });
         describe('Test for adding a review', () => {
             it('it should add reviews to a business', (done) => {
                 chai.request(app)
                     .post(`${rootEndpoint}/1/reviews`)
                     .send({ description: 'I love it' })
                     .set('token', authToken)
                     .end((err, res) => {
                         expect(res.status).to.equal(201);
                         expect(res.body.message).to.equal('review successfully created');
                         expect(res.body.review.description).to.equal('I love it');
                         done();
                     });
             });
         });
         describe('Test for adding a blank review', () => {
            it('it should add reviews to a business', (done) => {
                chai.request(app)
                    .post(`${rootEndpoint}/1/reviews`)
                    .send({ description: '' })
                    .set('token', authToken)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body.errors).to.equal('Please input your review');
                        done();
                    });
            });
        });
     });
});
