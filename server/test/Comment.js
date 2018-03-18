import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();

chai.use(chaiHttp);

describe(' All Tests for posting and getting business comment', () => {
    describe('Test to get business reviews', () => {
        it('Ensures comments of a business can be gotten', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/2/reviews/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('Comments');
                    done();
                });
        });
    });
    describe('Test to get business reviews for a non-existing business', () => {
        it('Ensures comments can only be gotten for registered business', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/22222222/reviews/')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
    describe('Test to post business reviews for non existing business', () => {
        it('Ensures comments can only be posted for existing business', (done) => {
            const req = {
                body:
                    {
                        date: '09-09-2017',
                        commentor: 'Fashion',
                        message: 'Lagos',
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/266666/reviews/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
    describe('Test to post business reviews with no date', () => {
        it('Ensures comments of a business must have date', (done) => {
            const req = {
                body:
                    {
                        date: null,
                        commentor: 'Fashion',
                        message: 'Lagos',
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/2/reviews/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to post business reviews with no message', () => {
        it('Ensures comments of a business must have a message', (done) => {
            const req = {
                body:
                    {
                        date: '20-2-2010',
                        commentor: 'Fashion',
                        message: null,
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/2/reviews/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });
    describe('Test to post business reviews with no commentor', () => {
        it('Ensures comments of a business must have a message', (done) => {
            const req = {
                body:
                    {
                        date: '20-2-2010',
                        commentor: null,
                        message: 'not null',
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/2/reviews/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('errors');
                    done();
                });
        });
    });

    describe('Test to post business reviews with all parameters filled correctly', () => {
        it('Ensures comments of a business must have a message', (done) => {
            const req = {
                body:
                    {
                        date: '20-2-2010',
                        commentor: 'Fash',
                        message: 'good business',
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/2/reviews/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.should.have.property('comment');
                    done();
                });
        });
    });
});
