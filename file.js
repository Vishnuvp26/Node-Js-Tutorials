    const readline = require('readline')
    const fs = require('fs');
    const { log } = require('console');

    fs.readFile('./files/start.txt', 'utf-8', (error, data) => {
        console.log(data)
    })
    console.log('Reading File...............')