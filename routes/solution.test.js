//
// const axios = require('axios');
// const server = require('./solution');

// axios.get('http://localhost:9080/anand')
//   .then((response) => {
//     if (response.data === 'Hello anand') {
//       console.log(response.data, 'Success');
//     }
//     // console.log(response);
//     server.stop();
//   })
//   .catch((error) => {
//     console.log(error);
//     server.stop();
//   });
const server = require('./solution');

// const Server = require('./hello_hapi');

describe('controller', () => {
  test('responds with success for ping', (done) => {
    server.inject('/anand', (response) => {
      expect(response.result).toBe('Hello anand');
      done();
    });
  });
});
// describe('ping controller', () => {
//   const options = {
//     method: 'GET',
//     url: 'http://localhost:9080/anand',
//   };
//
//   beforeAll((done) => {
//     Server.on('start', () => {
//       done();
//     });
//   });
//
//   afterAll((done) => {
//     Server.on('stop', () => {
//       done();
//     });
//     Server.stop();
//   });
//
//   test('responds with success for ping', (done) => {
//     Server.inject(options, (response) => {
//       // expect(response.statusCode).toBe(200);\
//       expect(response.data).toBe('Hello anand');
//       done();
//     });
//   });
// });
