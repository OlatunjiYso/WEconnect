import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();
chai.use(chaiHttp);
describe(' All Tests for adding a new business', () => {
    describe('Test to add a business with no title', () => {
        it('Ensures business must have a title', (done) => {
            const req = {
                body:
                    {
                        id: '14',
                        title: null,
                        category: 'Fashion',
                        location: 'Lagos',
                        description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                        phone: '08111111111',
                        email: 'fas@andela.com',
                        ownerId: 1
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('Please input business title');
                    done();
                });
        });
    });
    describe('Test to add a business with no location', () => {
        it('Ensures registered business must have a location', (done) => {
            const req = {
                body:
                    {
                        id: '14',
                        title: 'Amazing',
                        category: 'Fashion',
                        location: null,
                        description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                        phone: '08111111111',
                        email: 'fas@andela.com',
                        ownerId: 1
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('Please input business location');
                    done();
                });
        });
    });
    describe('Test to add a business with no category', () => {
        it('Ensures business must belong to a category', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: null,
                    location: 'Lagos',
                    description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    phone: '08111111111',
                    email: 'fas@andela.com',
                    ownerId: 1
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('Please input business category');
                    done();
                });
        });
    });
    describe('Test to add a business with no description', () => {
        it('Ensures business must have a description', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: 'cta',
                    location: 'Lagos',
                    description: null,
                    phone: '08111111111',
                    email: 'fas@andela.com',
                    ownerId: 1
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('Please input business description');
                    done();
                });
        });
    });
    describe('Test to add a business with a very short description', () => {
        it('Ensures business must have a description', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: 'power',
                    location: 'Lagos',
                    description: 'desript',
                    phone: '08111111111',
                    email: 'fas@andela.com',
                    ownerId: 1
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('description must be a minimum of 20 characters');
                    done();
                });
        });
    });
    describe('Test to add a business with no phone number', () => {
        it('Ensures business must have a phone number', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: 'Dance',
                    location: 'Lagos',
                    description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    phone: null,
                    email: 'fas@andela.com',
                    ownerId: 1
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('Please input business phone number');
                    done();
                });
        });
    });
    describe('Test to add a business with no email', () => {
        it('Ensures business must have an email address', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: 'notnull',
                    location: 'Lagos',
                    description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    phone: '08111111111',
                    email: null,
                    ownerId: 1
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('email is required');
                    done();
                });
        });
    });
    describe('Test to add a business with an Invalid email', () => {
        it('Ensures business must have an email address', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: 'Japanees',
                    location: 'Lagos',
                    description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    phone: '08111111111',
                    email: 'baba',
                    ownerId: 1
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    res.body.errors.should.be.equal('Invalid email');
                    done();
                });
        });
    });
    describe('Test to add a business with no ownerId', () => {
        it('Ensures business must belong to a category', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: null,
                    location: 'Lagos',
                    description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    phone: '08111111111',
                    email: 'fas@andela.com',
                    ownerId: null
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to add a business with all parameters as expected', () => {
        it('Ensures businesses are added when all fields are supplied', (done) => {
            const req = {
                body:
                {
                    id: '14',
                    title: 'Jollf rice',
                    category: 'Beautiful',
                    location: 'Lagos',
                    description: 'wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
                    phone: '08111111111',
                    email: 'fas@andela.com',
                    ownerId: 2
                }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('business created successfully');
                    done();
                });
        });
    });
});
