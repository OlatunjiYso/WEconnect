import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const expect = { chai };

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
                        location: 'Lagos'
                    }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
    describe('Test to add a business with no location', () => {
        it('Ensures registered business must have a location', (done) => {
            const req = {
                body:
                    {
                        id: '24',
                        title: 'Scissors',
                        category: 'Fashion',
                        location: null
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
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
                        title: 'Scissors',
                        category: null,
                        location: 'Lagos'
                    }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
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
                        title: 'Scissirs',
                        category: 'Fashion',
                        location: 'Lagos'
                    }
            };

            chai.request(app)
                .post('/api/v1/businesses/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('business created successfully');
                    done();
                });
        });
    });
});
