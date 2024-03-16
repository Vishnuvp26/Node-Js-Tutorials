//create a server
const http = require('http');
const hostname = 'localhost'
const port = 8080;

http.createServer(function (req, res) {
  res.write('Hello Vishnu Mohan, Welcome to the server'); //write a response to the client
  res.end(); //end the response
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
