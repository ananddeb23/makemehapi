const fs = require('fs');

const axios = require('axios');
const server = require('./solution');

axios.get('http://localhost:9080/anand')
  .then((response) => {
    const buffer = fs.readFileSync('index.html');
    const res = buffer.toString();
    if (response.data === res) {
      console.log(response.data, 'Success');
    }
    // console.log(response);
    server.stop();
  })
  .catch((error) => {
    console.log(error);
    server.stop();
  });
