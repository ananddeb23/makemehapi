const http = require('http');
const axios = require('axios');
const server = require('./solution');

// const Server = require('./hello_hapi');

describe('controller', () => {
  test('responds with success for ping', (done) => {
    server.inject('/', (response) => {
      expect(response.result).toBe('Hello hapi');
      done();
    });
  });
});
// // describe(' Test the output', () => {
// //   test(' xepect to get Hello Hapi', () => {
// //     axios.get('http://localhost:8080')
// //       .then((response) => {
// //         console.log(response.data);
// //         server.stop();
// //         expect(response.data).toBe('Hello hapii');
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   });
// // });
// // server.stop();
// describe(' Test the output', () => {
//   test(' xepect to get Hello Hapi', (done) => {
//     http.get('http://localhost:8080', (response) => {
//       response.setEncoding('UTF8');
//
//       response.on('data', (data) => {
//       // console.log(data);
//       // console.log(data);
//         server.stop();
//         echo(data);
//         expect(data).toBe('Hello hapi');
//         done();
//       });
//     });
//   });
// });

// axios.get('http://localhost:8080')
//   .then((response) => {
//     if (response.data === 'Hello hapi') {
//       console.log(response.data, 'Yaiiii');
//     }
//     // console.log(response);
//     server.stop();
//   })
//   .catch((error) => {
//     console.log(error);
//     server.stop();
//   });
