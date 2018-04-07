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
    describe('Test for adding a business', () => {
        before((done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({ username: 'wonderguy', password: 'wonderguy' })
                .end((err, res) => {
                    authToken = res.body.token;
                    done();
                });
        });
        describe('Test for adding a business', () => {
            it('it should add a business to the businesses database', (done) => {
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .send(testData.businessDetails)
                    .set('token', authToken)
                    .end((err, res) => {
                        expect(res.status).to.equal(201);
                        expect(res.body.message).to.equal('business successfully created');
                        expect(res.body.business.title).to.equal('Just Suits');
                        expect(res.body.business).to.have.property('id');
                        expect(res.body.business.phone).to.equal('08012345676');
                        expect(res.body.business.email).to.equal('olat@andela.com');
                        done();
                    });
            });
        });
        describe('Test to add a business by a user with invalid token', () => {
            it('it should catch authentication failures before adding a business to the businesses database', (done) => {
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', 'invalidToken')
                    .send(testData.businessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(401);
                        expect(res.body).to.be.a('object');
                        expect(res.body.message).to.equal('token Invalid');
                        done();
                    });
            });
        });
        describe('Test to add a business by a user no authentication', () => {
            it('it should catch authentication failures before adding a business to the businesses database', (done) => {
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .send(testData.businessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(401);
                        expect(res.body).to.be.a('object');
                        expect(res.body.message).to.equal('no token!');
                        done();
                    });
            });
        });
        describe('Test to add a business with no category', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.category = null;
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Please input business category');
                        testData.businessDetails.category = 'fashion';
                        done();
                    });
            });
        });
        describe('Test to add a business with no title', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.title = null;
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Please input business title');
                        testData.businessDetails.title = 'Just Suits';
                        done();
                    });
            });
        });
        describe('Test to add a business with no location', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.location = null;
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Please input business location');
                        testData.businessDetails.location = 'Lagos';
                        done();
                    });
            });
        });
        describe('Test to add a business with no phone', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.phone = null;
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Please input business phone number');
                        testData.businessDetails.phone = '08012345676';
                        done();
                    });
            });
        });
        describe('Test to add a business with no email', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.email = null;
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('email is required');
                        testData.businessDetails.email = 'olat@andela.com';
                        done();
                    });
            });
        });
        describe('Test to add a business with an invalid email', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.email = 'invalidemail';
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Invalid email');
                        testData.businessDetails.email = 'olat@andela.com';
                        done();
                    });
            });
        });
        describe('Test to add a business with an invalid email', () => {
            it('it should catch validation errors before adding a business to the businesses database', (done) => {
                const invalidBusinessDetails = testData.businessDetails;
                invalidBusinessDetails.email = 'invalidemail';
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(invalidBusinessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Invalid email');
                        testData.businessDetails.email = 'olat@andela.com';
                        done();
                    });
            });
        });
        describe('Test to add a business with an existing business name', () => {
            it('it should not add a business with an existing business name', (done) => {
                const { businessDetails } = testData;
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(businessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(409);
                        expect(res.body).to.be.a('object');
                        expect(res.body.success).to.equal(false);
                        expect(res.body.message).to.equal('This business name is already in use');
                        done();
                    });
            });
        });
        describe('Test to add a business with an existing email', () => {
            it('it should not add a business with an existing email', (done) => {
                const { businessDetails } = testData;
                businessDetails.title = 'anotherBusiness';
                chai.request(app)
                    .post(`${rootEndpoint}`)
                    .set('token', authToken)
                    .send(businessDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(409);
                        expect(res.body).to.be.a('object');
                        expect(res.body.success).to.equal(false);
                        expect(res.body.message).to.equal('This business email exist already');
                        done();
                    });
            });
        });
    });

   describe('Test for Getting businesses', () => {
        before((done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({ username: 'wonderguy', password: 'wonderguy' })
                .end((err, res) => {
                    authToken = res.body.token;
                    done();
                });
        });
    
        describe('Test for getting all businesses', () => {
            it('it should display all businesses', (done) => {
                chai.request(app)
                    .get(`${rootEndpoint}`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal(' businesses ');
                        expect(res.body.businesses[0].title).to.equal('Just Suits');
                        expect(res.body.businesses[0]).to.have.property('id');
                        done();
                    });
            });
        });
        describe('Test for getting a particular business ', () => {
            it('it should display all businesses', (done) => {
                chai.request(app)
                    .get(`${rootEndpoint}/1`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('business found');
                        expect(res.body.business.title).to.equal('Just Suits');
                        expect(res.body.business.id).to.equal(1);
                        expect(res.body.business).to.have.property('category');
                        done();
                    });
            });
        });
        describe('Test for getting a particular non existing business ', () => {
            it('it should display all businesses', (done) => {
                chai.request(app)
                    .get(`${rootEndpoint}/111`)
                    .end((err, res) => {
                        expect(res.status).to.equal(404);
                        expect(res.body.message).to.equal('No such business exists');
                        done();
                    });
            });
        });
        describe('Test for getting a businesses by category ', () => {
            it('it should display all businesses in the specified category', (done) => {
                chai.request(app)
                    .get(`${rootEndpoint}?category=fashion`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('fashion businesses ');
                        expect(res.body.businesses[0].title).to.equal('Just Suits');
                        expect(res.body.businesses[0].category).to.equal('fashion');
                        done();
                    });
            });
        });
        describe('Test for getting a businesses by location ', () => {
            it('it should display all businesses in the specified location', (done) => {
                chai.request(app)
                    .get(`${rootEndpoint}?location=lagos`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal(' businesses in lagos');
                        expect(res.body.businesses[0].title).to.equal('Just Suits');
                        expect(res.body.businesses[0].location).to.equal('lagos');
                        done();
                    });
            });
        });
        describe('Test for getting a businesses by location and category ', () => {
            it('it should display all businesses in the specified location and category', (done) => {
                chai.request(app)
                    .get(`${rootEndpoint}?location=lagos&category=fashion`)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('fashion businesses in lagos');
                        expect(res.body.businesses[0].title).to.equal('Just Suits');
                        expect(res.body.businesses[0].location).to.equal('lagos');
                        done();
                    });
            });
        });
    }); 
    describe('Test for updating businesses', () => {
        before((done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({ username: 'wonderguy', password: 'wonderguy' })
                .end((err, res) => {
                    authToken = res.body.token;
                    done();
                });
        });

        before((done) => {
            Business.create(testData.businessDetail2)
                .then(() => Promise.resolve(done()))
                .catch(err => Promise.reject(done(err)));
        });
        describe('Test for updating the title of a business', () => {
            it('it should modify the title of the business', (done) => {
                chai.request(app)
                    .put(`${rootEndpoint}/2`)
                    .set('token', authToken)
                    .send({ title: 'Germany Boots' })
                    .end((err, res) => {
                        console.log(res.body);
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('business modified successfully, 1 field(s) modified!');
                        expect(res.body.updated.title).to.equal('Germany Boots');
                        done();
                    });
            });
        });
        describe('Test for updating the category of a business', () => {
            it('it should modify the category of a business', (done) => {
                chai.request(app)
                    .put(`${rootEndpoint}/2`)
                    .set('token', authToken)
                    .send({ category: 'agric' })
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('business modified successfully, 1 field(s) modified!');
                        expect(res.body.updated.category).to.equal('agric');
                        done();
                    });
            });
        });
        describe('Test for updating the location of a business', () => {
            it('it should modify the location of a business', (done) => {
                chai.request(app)
                    .put(`${rootEndpoint}/2`)
                    .set('token', authToken)
                    .send({ location: 'kano' })
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to
                        .equal('business modified successfully, 1 field(s) modified!');
                        expect(res.body.updated.location).to.equal('kano');
                        done();
                    });
            });
        });
        describe('Test for updating a non existing business', () => {
            it('it should reject modifying non existing businesses', (done) => {
                chai.request(app)
                    .put(`${rootEndpoint}/111`)
                    .set('token', authToken)
                    .send({ location: 'kano' })
                    .end((err, res) => {
                        expect(res.status).to.equal(404);
                        expect(res.body.message).to.equal('no such business exists');
                        done();
                    });
            });
        });
    });


    describe('Test for deleting businesses', () => {
        before((done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({ username: 'wonderguy', password: 'wonderguy' })
                .end((err, res) => {
                    authToken = res.body.token;
                    done();
                });
        });
        describe('Test for deleting', () => {
            it('it should delete the business', (done) => {
                chai.request(app)
                    .delete(`${rootEndpoint}/2`)
                    .set('token', authToken)
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('business deleted');
                        done();
                    });
            });
        });
    });
});
