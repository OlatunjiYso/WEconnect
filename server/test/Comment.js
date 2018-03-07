import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const expect = { chai };
const should = chai.should();

chai.use(chaiHttp);

describe(' All Tests for posting a comment to a business', () => {
    describe('Test to get a business reviews', () => {
        it('Ensures comments of a business can be gotten', (done) => {
            chai.request(app)
                .get('/api/v1/businesses/2/reviews/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
    describe('Test to add an empty comment', () => {
        it('Ensures comments must not be empty', (done) => {
            const req = {
                body:
                    {
                        businessId: '2',
                        date: '1st may',
                        commentor: null,
                        message: 'Awesome Awesome'
                    }
            };
            chai.request(app)
                .post('/api/v1/businesses/2/reviews/')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    done();
                });
        });
    });
    describe('Test to add a comment with no commentor', () => {
        it('Ensures comments have commentor', (done) => {
            const req = {
                body:
                    {
                        businessId: '2',
                        date: '1st may',
                        commentor: null,
                        message: 'Awesome Awesome'
                    }
            };

            chai.request(app)
                .post('/api/v1/businesses/2/reviews')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('commentor field cannot be empty, please Input commentor field.');
                    done();
                });
        });
    });

    describe('Test to add an event with all fields correctly filled', () => {
        it('Ensures events will correct parameters would be added', (done) => {
            const req = {
                body:
                    {
                        businessId: '2',
                        date: '1st may',
                        commentor: 'debo',
                        message: 'megamega super'

                    }
            };

            chai.request(app)
                .post('/api/v1/businesses/2/reviews')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('comment created successfully');
                    done();
                });
        });
    });
});
