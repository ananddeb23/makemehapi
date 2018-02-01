const inert = require('inert');
const Hapi = require('hapi');
const path = require('path');

// const reply = {
//   file: path.join(__dirname, 'handling/index.html'),
// };
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8080,
});

// server.route({ path: '/', method: 'GET', handler: reply });
server.register(inert, (err) => {
  if (err) throw err;
  server.route({
    path: '/',
    method: 'GET',
    handler(request, reply) {
      reply.file('./handling/index.html');
    },
  });
});
// server.start(() => {
//   console.log('Server running at:', server.info.uri);
// });

module.exports = server;
