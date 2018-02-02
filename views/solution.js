const hapi = require('hapi');
const vision = require('vision');
const handlebars = require('handlebars');

const server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: (8080),
});


server.register(vision, (err) => {
  if (err) throw err;
  server.route({
    path: '/',
    method: 'GET',
    handler: {
      view: 'index.html',
    },
  });
  server.views({
    engines: {
      html: handlebars,
    },
    path: './views/templates',
  });
});


// server.start();

module.exports = server;
