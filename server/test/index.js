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
        expect(res.status).to.equal(404);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});


describe(' GET undefined routes ', () => {
  it('c', (done) => {
    chai.request(app)
      .get('/hello')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equal('Page not found');
        done();
      });
  });
});
