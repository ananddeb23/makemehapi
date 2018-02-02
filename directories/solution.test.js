const fs = require('fs');

const axios = require('axios');
const server = require('./solution');

// axios.get('http://localhost:8080/')
//   .then((response) => {
//     const buffer = fs.readFileSync('index.html');
//     const res = buffer.toString();
//     if (response.data === res) {
//       console.log(response.data, 'Success');
//     }
//     // console.log(response);
//     server.stop();
//   })
//   .catch((error) => {
//     console.log(error);
//     server.stop();
//   });
const { expect } = require('code');
const labScript = require('lab').script();
// const fs = require('fs');
const { it } = labScript;
exports.lab = labScript;

// const server = require('./solution');

it('Should get a valid response', (done) => {
  // before(() => {
  //   server.start();
  // });
  // after(() => {
  //   server.stop();
  // });
  const req = {
    method: 'GET',
    url: '127.0.0.1:8080/foo/bar/baz/file.html',
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
    url: '127.0.0.1:8080/foo/bar/baz/file.html',
  };
  server.inject(req, (res) => {
    const buffer = fs.readFileSync('./directories/dir/file.html');
    const resu = buffer.toString();
    expect(res.result).to.equal(resu);
    done();
  });
});

// describe('controller', () => {
//   test('responds with success for ping', (done) => {
//     server.inject('/', (response) => {
//       const buffer = fs.readFileSync('index.html');
//       const res = buffer.toString();
//       console.log(response.result);
//       expect(response.result).toBe(res);
//       done();
//     });
//   });
// });
