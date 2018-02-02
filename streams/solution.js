const hapi = require('hapi');
const fs = require('fs');
const rot13 = require('rot13-transform');

const server = new hapi.Server();
const reply = (request, response) => {
  const read = fs.createReadStream('./book.txt');

  response(read.pipe(rot13()));
  // .pipe(response);
};
server.connection({
  host: 'localhost',
  // port: Number(process.argv[2] || 8080),
  port: (8080),
});
// server.start();
server.route({ path: '/', method: 'GET', handler: reply });
module.exports = server;
