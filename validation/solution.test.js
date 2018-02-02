const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('./solution');

it('Should get a ok 200 for valid endpoint', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/chickens/breed=cockbird',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});
it('Should get 404 for invalid endpoint no breed paramter', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/chickens/',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(404);
    done();
  });
});

it('Should get 404 for invalid endpoint chicken no chickens', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/chicken/murga',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(404);
    done();
  });
});


it('Should get expected reponse', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/chickens/murga',
  };
  server.inject(req, (res) => {
    const expectedResult = 'Hello murga';
    expect(res.result).to.equal(expectedResult);
    done();
  });
});
