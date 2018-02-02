const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('./solution');

it('Should get a response of ok 200', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});


it('Should get correct output', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/',
  };
  server.inject(req, (res) => {
    const expectedResult = 'Gur Chefhvg bs Uncv-arff';
    expect(res.result).to.equal(expectedResult);
    done();
  });
});
