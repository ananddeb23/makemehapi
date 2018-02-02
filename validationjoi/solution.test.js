const { expect } = require('code');
const labScript = require('lab').script();

const { it } = labScript;
exports.lab = labScript;

const server = require('./solution');

it('Should get a ok 200 for valid endpoint', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({ username: 'Anand', password: '12sd', isGuest: 'false' }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});
it('Should get a  400 for missing isGuest', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({ username: 'Anand', password: '12sd' }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(400);
    done();
  });
});
it('Should get a 400 for having both accesstoken and password in request', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({
      username: 'Anand', password: '12sd', isGuest: false, accessToken: '1233434d',
    }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(400);
    done();
  });
});
it('Should get a ok 200 for extra argument apart from needed ones', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({
      username: 'Anand', password: '12sd', isGuest: false, extra: 'abc',
    }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});
it('Should get a ok 200 for missing username but isGuest is true', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({
      password: '12sd', isGuest: true, extra: 'abc',
    }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});
it('Should get a 400 when password and authtoken both are missing', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({
      username: 'asdsad', isGuest: true, extra: 'abc',
    }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.statusCode).to.equal(200);
    done();
  });
});

it('Should get a expected output for a valid request', (done) => {
  const req = {
    method: 'POST',
    url: '127.0.0.1:8080/login',
    payload: JSON.stringify({
      password: '12sd', isGuest: true, extra: 'abc',
    }),

    // url: 'username=1234/password=443/isGuest=false',
  };
  server.inject(req, (res) => {
    expect(res.result).to.equal('login successful');
    done();
  });
});
