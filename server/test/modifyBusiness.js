import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

const expect = { chai };

const should = chai.should();
chai.use(chaiHttp);

describe(' All Tests for modifying centres', () => {

    describe('Test to modify the category of a centre', () => {
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
});
