const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('./solution');

it('Should get a valid response', (done) => {
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/?name=Anand',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});
it('Should get a valid response', (done) => {
  // before(() => {
  //   server.start();
  // });
  // after(() => {
  //   server.stop();
  // });
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/?name=Anand',
  };
  server.inject(req, (res) => {
    const expectedResult = `<html>
        <head><title>Hello Anand</title></head>
        <body>
            Hello Anand
        </body>
    </html>
        `;
    expect(res.result).to.equal(expectedResult);
    done();
  });
});
