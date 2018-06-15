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

describe(' All Tests for business reviews', () => {
    before((done) => {
        db.sequelize.sync({ force: true }) // drops table and re-creates it
            .then(() => {
                chai.request(app)
                    .post('/api/v1/auth/signup')
                    .send(testData.userDetails)
                    .end(() => {
                        done();
                    });
            });
    });
     describe('Test for adding a reviews', () => {
         before((done) => {
             chai.request(app)
                 .post('/api/v1/auth/login')
                 .send({ username: 'wonderguy', password: 'wonderguy' })
                 .end((err, res) => {
                     authToken = res.body.token;
                     done();
                 });
         });
         describe('Tests for reviews', () => {
            before((done) => {
                Business.create(testData.businessDetails)
                    .then(() => Promise.resolve(done()))
                    .catch(err => Promise.reject(done(err)));
            });

            describe('Test for adding a review', () => {
                it('it should add reviews to a business', (done) => {
                    chai.request(app)
                        .post(`${rootEndpoint}/1/reviews`)
                        .send(testData.reviewDetails)
                        .set('token', authToken)
                        .end((err, res) => {
                            expect(res.status).to.equal(201);
                            expect(res.body.message).to.equal('review successfully created');
                            expect(res.body.review.description).to.equal('wonderful business');
                            done();
                        });
                });
            });
            describe('Test for adding a blank review', () => {
               it('it should add valid reviews to a business', (done) => {
                   chai.request(app)
                       .post(`${rootEndpoint}/1/reviews`)
                       .send({ description: '', reviewerName: 'fdf' })
                       .set('token', authToken)
                       .end((err, res) => {
                           expect(res.status).to.equal(400);
                           expect(res.body.errors[0]).to.equal('Please input your review');
                           done();
                       });
               });
           });
           describe('Test for updating a review', () => {
               it('it should update reviews', (done) => {
                   chai.request(app)
                       .put(`${rootEndpoint}/1/reviews/1`)
                       .send({ description: 'I love it once more' })
                       .set('token', authToken)
                       .end((err, res) => {
                           expect(res.status).to.equal(200);
                           expect(res.body.message).to.equal('review successfully modified');
                           done();
                       });
               });
           });
           describe('Test for deleting a review', () => {
               it('it should delete reviews', (done) => {
                   chai.request(app)
                       .delete(`${rootEndpoint}/1/reviews/1`)
                       .set('token', authToken)
                       .end((err, res) => {
                           expect(res.status).to.equal(200);
                           expect(res.body.message).to.equal('review successfully deleted');
                           done();
                       });
               });
           });
         });
     });
});
