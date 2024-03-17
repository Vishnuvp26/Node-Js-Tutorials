// Node Js
// const http = require('http')

// http.createServer((req, res)=> {
//     res.write('hello user')
//     res.end()
// }),listen(7000)



/****************************************************/

//Express
const express = require('express')
const app = express()

app.get('/:name', (req, res) => {
    res.send("hello")
})

// app.listen(3000);
app.listen(3000, () => {
    console.log('Server Started');
})
