axios.get('http://localhost:8080/Anand')
  .then((response) => {
    if (response.data === 'Hello Anand') {
      console.log(response.data, 'Success');
    }
    // console.log(response);
    server.stop();
  })
  .catch((error) => {
    console.log(error);
    console.log('Failed');
    server.stop();
  });
