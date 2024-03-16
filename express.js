const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'))
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.listen(7000, () => {
    console.log(__filename)
    console.log('Server Started');
});

