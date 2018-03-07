import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../app';

import { expect } from 'chai';

const should = chai.should();
chai.use(chaiHttp);

describe(' All Tests for deleting centres', () => {
    describe('Test to delete an existing centre', () => {
        it('Ensures existing centres can be deleted', (done) => {
            chai.request(app)
                .delete('/api/v1/businesses/5')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.should.have.property('message');
                    res.body.message.should.be.equal('profile successfully deleted');
                    done();
                });
        });
    });
});
