import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();
chai.use(chaiHttp);
describe(' All Tests for adding a new user', () => {
    describe('Test to add a user with no username', () => {
        it('Ensures business must have a title', (done) => {
            const req = {
                body:
                    {
                        username: null,
                        password: 'secretttt',
                        email: 'gg@andela.com',
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to add a user with no password', () => {
        it('Ensures users with no password arenot added', (done) => {
            const req = {
                body:
                    {
                        username: 'good boy',
                        password: null,
                        email: 'gg@andela.com',
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to add a user with no email', () => {
        it('Ensures users with no email are not added', (done) => {
            const req = {
                body:
                    {
                        username: 'good boy',
                        password: 'secret',
                        email: null,
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to add a user with an invalid email', () => {
        it('Ensures users with invalid email are not added', (done) => {
            const req = {
                body:
                    {
                        username: 'good boy',
                        password: 'secret',
                        email: 'null',
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to add a user with a password less than 5 characters', () => {
        it('Ensures users with in valid passwords are not added', (done) => {
            const req = {
                body:
                    {
                        username: 'good boy',
                        password: 's',
                        email: null,
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/signup')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('password must be a min length of 5');
                    done();
                });
        });
    });
    describe('Test to login a registered user with wrong authentication', () => {
        it('Ensures users that input wrong passwords are not logged in', (done) => {
            const req = {
                body:
                    {
                        username: 'olaaz',
                        password: 'sudaddadadad',
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/login')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('Invalid Password');
                    done();
                });
        });
    });
    describe('Test to login a non registered user', () => {
        it('Ensures non registered user are are not permitted to login', (done) => {
            const req = {
                body:
                    {
                        username: 'jhcfhfhvheolaaz',
                        password: 'sudaddadadad',
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/login')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('no such user exists');
                    done();
                });
        });
    });
    describe('Test to login a registered user with correct authentication', () => {
        it('Ensures user with correct authentication are logged in', (done) => {
            const req = {
                body:
                    {
                        username: 'olaaz',
                        password: 'olaaz',
                    }
            };
            chai.request(app)
                .post('/api/v1/auth/login')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('You are signed in!');
                    done();
                });
        });
    });
});
