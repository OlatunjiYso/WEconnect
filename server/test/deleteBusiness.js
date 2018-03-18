import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const should = chai.should();
chai.use(chaiHttp);

describe(' All Tests for deleting businesses', () => {
    describe('Test to delete a business', () => {
        it('Ensures existing businesses can be deleted', (done) => {
            chai.request(app)
                .delete('/api/v1/businesses/2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('business was successfully deleted');
                    done();
                });
        });
    });
    describe('Test to delete a non existing business', () => {
        it('Ensures only existing businesses can be deleted', (done) => {
            chai.request(app)
                .delete('/api/v1/businesses/2222222')
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('The business with the specified id doesnot exist');
                    done();
                });
        });
    });
});
