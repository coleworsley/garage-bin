const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../index.js');
const environment = process.env.NODE_ENV;
const configuration = require('../../knexfile.js')[environment];
const knex = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});

describe('API Routes', () => {
  before((done) => {
    knex.migrate.latest()
      .then(() => done());
  });

  beforeEach((done) => {
    knex.seed.run()
      .then(() => done());
  })

  describe('GET: /api/v1/garage', () => {
    it('HAPPYPATH: should return an array of items', (done) => {
      chai.request(server)
        .get('/api/v1/garage')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('array');
          res.body[0].should.have.property('id');
          res.body[0].should.have.property('name');
          res.body[0].name.should.equal('Cooler');
          res.body[0].should.have.property('description');
          res.body[0].description.should.equal('it cools things');
          res.body[0].should.have.property('cleanliness');
          res.body[0].cleanliness.should.equal('Sparkling');
          done();
        })
    });
  });
});
