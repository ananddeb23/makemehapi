
const Hapi = require('hapi');
const Joi = require('joi');

const reply = (request, reply1) => {
  reply1('login successful');
};
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  // port: Number(process.argv[2], 8080),
  port: 8080,
});
server.route({
  path: '/login',
  method: 'POST',
  handler: reply,
  config: {
    validate: {
      payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum(),
      }).options({ allowUnknown: true }).without('password', 'accessToken'),
    },
  },
});
server.start(() => {
  // console.log('Server running at:', server.info.uri);
});

module.exports = server;
