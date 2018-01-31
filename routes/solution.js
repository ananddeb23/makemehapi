
const Hapi = require('hapi');

const reply = (request, reply1) => {
  reply1(`Hello ${request.params.name}`);
};
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(9080 || process.argv[2]),
});
server.route({ path: '/{name}', method: 'GET', handler: reply });
server.start(() => {
  // console.log('Server running at:', server.info.uri);
});

module.exports = server;
