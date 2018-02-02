const inert = require('inert');
const Hapi = require('hapi');
const path = require('path');
//
// const reply = {
//   directory: { path: `/Users/anandshankardeb/hapi/directories/dir/${request.params.param}` },
// };
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  //  port: Number(process.argv[2] || 8080),
  port: 8080,
});


server.register(inert, (err) => {
  if (err) throw err;
  server.route({
    path: '/foo/bar/baz/{filename}',
    method: 'GET',
    handler: { directory: { path: './directories/dir' } },
  });
});
// server.start((err) => {
//   // console.log('Server running at:', server.info.uri);
//   // console.log(err);
// });

module.exports = server;
