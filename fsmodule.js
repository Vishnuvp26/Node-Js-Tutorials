const { ChildProcess } = require('child_process')
const { log } = require('console')
const fs = require('fs')

console.log('first')

const file = fs.readFileSync('./text.txt', 'utf-8')
console.log(file)

console.log('second')

fs.readFile('./text.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }
});

console.log('third')

fs.writeFileSync('./greet.txt', 'Hello World')

fs.writeFile('./greet.txt', 'Hello Coders', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File has been updated");
    }
});