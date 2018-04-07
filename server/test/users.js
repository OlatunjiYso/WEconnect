import chai from 'chai';

import chaiHttp from 'chai-http';
import db from '../models/index';
import app from '../app';
import testData from './testdata';

let authToken;

const { expect } = chai;
chai.use(chaiHttp);

describe(' All Tests for users', () => {
    beforeEach((done) => {
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
    describe('All test for user authentication', () => {
        describe('Test for signin', () => {
            it('it signs in a registered user with correct parameters', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/login')
                    .send({ username: 'wonderguy', password: 'wonderguy' })
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body.message).to.equal('you are logged in!');
                        expect(res.body).to.have.property('token');
                        done();
                    });
            });
        });
        describe('Test for signin with wrong password', () => {
            it('it rejects authentication with wrong password', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/login')
                    .send({ username: 'wonderguy', password: '111wonderguy' })
                    .end((err, res) => {
                        expect(res.status).to.equal(401);
                        expect(res.body.message).to.equal('invalid password');
                        done();
                    });
            });
        });
        describe('Test for signin with non existing username', () => {
            it('it rejects authentication with wrong password', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/login')
                    .send({ username: 'thswonderguy', password: 'wonderguy' })
                    .end((err, res) => {
                        expect(res.status).to.equal(404);
                        expect(res.body.message).to.equal('No such user exists');
                        done();
                    });
            });
        });
        describe('Test for signup with existing username', () => {
            it('it rejects signups with an existing username', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/signup')
                    .send(testData.userDetails)
                    .end((err, res) => {
                        expect(res.status).to.equal(409);
                        expect(res.body.message).to.equal('This username exist already');
                        done();
                    });
            });
        });
        describe('Test for signup with existing email', () => {
            it('it rejects signups with existing email', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/signup')
                    .send({
                        username: 'ndelaguy',
                        password: 'andelaguy',
                        email: 'wonder@gmail.com'
                    })
                    .end((err, res) => {
                        expect(res.status).to.equal(409);
                        expect(res.body.message).to.equal('This email exist already');
                        done();
                    });
            });
        });
        describe('Test for signup with acceptable parameters', () => {
            it('it should signup a new user', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/signup')
                    .send({
                        username: 'andelaguy',
                        password: 'andelaguy',
                        email: 'andela@gmail.com'
                    })
                    .end((err, res) => {
                        expect(res.status).to.equal(201);
                        expect(res.body.message).to.equal('You are signed up!');
                        done();
                    });
            });
        });
    });
    describe('All test for user password update', () => {
        before((done) => {
            chai.request(app)
                .post('/api/v1/auth/login')
                .send({ username: 'wonderguy', password: 'wonderguy' })
                .end((err, res) => {
                    authToken = res.body.token;
                    done();
                });
        });
        describe('Test to update password to a blank', () => {
            it('it should reject invalid passwords', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/passwords')
                    .set('token', authToken)
                    .send({
                        currentPassword: 'wonderguy',
                        newPassword: ''
                    })
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('Please input your new password');
                        expect(res.body.errors[1]).to.equal('password must be a min length of 5');
                        done();
                    });
            });
        });
        describe('Test to update password to a very short one', () => {
            it('it should reject invalid passwords', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/passwords')
                    .set('token', authToken)
                    .send({
                        currentPassword: 'wonderguy',
                        newPassword: 'abc'
                    })
                    .end((err, res) => {
                        expect(res.status).to.equal(400);
                        expect(res.body).to.be.a('object');
                        expect(res.body.errors).to.be.an('array');
                        expect(res.body.errors[0]).to.equal('password must be a min length of 5');
                        done();
                    });
            });
        });
        describe('updating password, having supplied a wrong current password', () => {
            it('it should reject updates when authentication fails', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/passwords')
                    .set('token', authToken)
                    .send({
                        currentPassword: '1wonderguy',
                        newPassword: 'anotherguy'
                    })
                    .end((err, res) => {
                        expect(res.status).to.equal(401);
                        expect(res.body).to.be.a('object');
                        expect(res.body.message).to.equal('Please enter the correct current password to proceed');
                        done();
                    });
            });
        });
        describe('updating password, having supplied all parameters correctly', () => {
            it('it should accept updates when all parameters are correct', (done) => {
                chai.request(app)
                    .post('/api/v1/auth/passwords')
                    .set('token', authToken)
                    .send({
                        currentPassword: 'wonderguy',
                        newPassword: 'anotherguy'
                    })
                    .end((err, res) => {
                        expect(res.status).to.equal(200);
                        expect(res.body).to.be.a('object');
                        expect(res.body.message).to.equal('You have successfully changed your password');
                        done();
                    });
            });
        });
    });
});
