//create a server
const http = require('http');
const fs = require('fs')
const hostname = 'localhost'
const port = 8080;

const html = fs.readFileSync('./files/index.html', 'utf-8')

http.createServer(function (req, res) {
    const path = req.url

    if (path === '/' || path === '/home') {
        res.end(html)
    } else if (path === '/about') {
        res.end('You are in about page')
    } else if (path === '/contact') {
        res.end('you are in contact page')
    } else {
        res.end('Error 404 : page not found')
    }

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
