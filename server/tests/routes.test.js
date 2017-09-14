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
        });
    });

    it('SADPATH: should return a 404 error if the path is not correct', (done) => {
      chai.request(server)
        .get('/api/v1/garages')
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('POST: /api/v1/garage', () => {
    it('HAPPYPATH: a user should be able to add a new item', (done) => {
      chai.request(server)
        .post('/api/v1/garage')
        .send({
          name: 'Bike',
          description: 'It has 2 wheels',
          cleanliness: 'Sparkling',
        })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.should.be.json;
          res.body.should.have.property('id');
          res.body.should.have.property('name');
          res.body.name.should.equal('Bike');
          res.body.should.have.property('description');
          res.body.description.should.equal('It has 2 wheels');
          res.body.should.have.property('cleanliness');
          res.body.cleanliness.should.equal('Sparkling');
          done();
        });
    });

    it('SADPATH: should return an error if not all the required params are met', (done) => {
      chai.request(server)
        .post('/api/v1/garage')
        .send({
          name: 'Bike',
          cleanliness: 'Sparkling',
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.should.be.json;
          res.body.should.have.property('error');
          res.body.error.should.equal('Missing required parameter description');
          done();
        });
    });

    it('SADPATH: should return an error if cleanliness is not one of the required keywords', (done) => {
      chai.request(server)
        .post('/api/v1/garage')
        .send({
          name: 'Bike',
          description: 'It has 2 wheels',
          cleanliness: 'awef',
        })
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.should.be.json;
          res.body.should.have.property('error');
          res.body.error.should.equal('awef is not a valid cleanliness. Please use one of the following: Sparkling, Dusty, or Rancid');
          done();
        })
    })
  });
});
