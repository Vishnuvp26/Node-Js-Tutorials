// //create a server
// const http = require('http');
// const hostname = 'localhost'
// const port = 8080;

// http.createServer(function (req, res) {
//   res.write('Hello Vishnu Mohan, Welcome to the server'); //write a response to the client
//   res.end(); //end the response
// }).listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const app = express()

app.use(loggingMiddleware)

app.get("/", (req, res) => {
  res.send("Home Page")
})

app.get("/users", (req, res) => {
  res.send("Users Page")
})

function loggingMiddleware(req, res, next) {
  console.log("Inside Middleware")
  next()
}


app.listen(7000, () => {
  console.log('Server started at port 7000');
})