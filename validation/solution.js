
const Hapi = require('hapi');
const Joi = require('joi');

const reply = (request, reply1) => {
  reply1(`Hello ${request.params.breed}`);
};
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  // port: Number(process.argv[2], 8080),
  port: 8080,
});
server.route({
  path: '/chickens/{breed}',
  method: 'GET',
  handler: reply,
  config: {
    validate: {
      // query: {
      //   chicken: Joi.string().required(),
      //
      // },
      params: {
        // with: Joi.string().required(),
        // parameters: Joi.string().required(),
        breed: Joi.string().required(),
      },
    },
  },
});
server.start(() => {
  // console.log('Server running at:', server.info.uri);
});

module.exports = server;
