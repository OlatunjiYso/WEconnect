import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();
chai.use(chaiHttp);

describe(' All Tests for modifying centres', () => {

    describe('Test to modify the email to an invalid one', () => {
        it('Ensures centres email only gets modified if entry is valid', (done) => {
            const req = {
                body:
                    {
                        email: 17,
                    }
            };
            chai.request(app)
                .put('/api/v1/businesses/3')
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
    describe('Test to modify the ownerId of a centre', () => {
        it('Ensures business ownerId cannot be modified', (done) => {
            const req = {
                body:
                    {
                        ownerId: 17,
                    }
            };
            chai.request(app)
                .put('/api/v1/businesses/3')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('Business ownerId cannot be changed!');
                    done();
                });
        });
    });
    describe('Test to modify the category of a business', () => {
        it('Ensures centres category can be modified', (done) => {
            const req = {
                body:
                    {
                        catagory: 'Tech',
                    }
            };
            chai.request(app)
                .put('/api/v1/businesses/3')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('profile successfully modified');
                    done();
                });
        });
    });
    describe('Test to modify the email of a business', () => {
        it('Ensures business email can be modified', (done) => {
            const req = {
                body:
                    {
                        email: 'ww@rr.com',
                    }
            };
            chai.request(app)
                .put('/api/v1/businesses/3')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('profile successfully modified');
                    done();
                });
        });
    });
    describe('Test to modify the location of a business', () => {
        it('Ensures business location can be modified', (done) => {
            const req = {
                body:
                    {
                        location: 'London',
                    }
            };

            chai.request(app)
                .put('/api/v1/businesses/3')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('profile successfully modified');
                    done();
                });
        });
    });
    describe('Test to modify the decription of a business', () => {
        it('Ensures business description can be modified', (done) => {
            const req = {
                body:
                    {
                        description: 'hhhshshhhshshshshshshshshshshssLondon',
                    }
            };

            chai.request(app)
                .put('/api/v1/businesses/3')
                .send(req.body)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('profile successfully modified');
                    done();
                });
        });
    });
});
