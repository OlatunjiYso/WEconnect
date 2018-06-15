import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
const { expect } = chai;


describe('GET undefined routes', () => {
  it('I love it', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});
