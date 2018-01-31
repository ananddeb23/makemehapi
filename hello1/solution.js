
const Hapi = require('hapi');

const reply = (request, reply1) => {
  reply1('Hello hapi');
};
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(8080 || process.argv[2]),
});
server.route({ path: '/', method: 'GET', handler: reply });
server.start(() => {
  console.log('Server running at:', server.info.uri);
});

module.exports = server;
