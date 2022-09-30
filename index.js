//? 1 - Packages Types

// Local Modules
const { ticket, Student, startingFunction } = require('./packages_Types/packages');

console.log(ticket);

const p = new Student("john fev", 18);
p.greetings()

startingFunction()

// Core Modules

const fs = require('fs');
const path = require('path');

// External Modules

const uuid = require('uuid');

    // generate universsal ids, have different versions (like v4)
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());

//? 2 - Global Variables

//? 3 - Packages Demo

    // a - path
    // b - fs
    // c - os
    // d - url
    // e - events

//? 4 - Packages Demo

const Logger = require('./logging/logger');
// const fs = require('fs');
// const path = require('path');

const logger = new Logger();

// Create folder that contains file logs

fs.mkdir(path.join(__dirname, '/logging', '/logs'), {}, err => {
    if (err) throw err;
    console.log('Folder Created !')
});

// Create file that contains logs

fs.writeFile(path.join(__dirname, '/logging', '/logs', 'logs.txt'), '', err => {
    if (err) throw err;
    console.log('File written to !')
})


// Log in place

logger.on('message', (data) => {
    console.log('Called Listner: ', data)
    fs.appendFile(path.join(__dirname, '/logging', '/logs', 'logs.txt'), `id :${data.id} has made message : ${data.message} \n`, err => {
            if (err) throw err;
            console.log('File appended to !')
        })
})

logger.log('Hello World')
logger.log('Hi')
logger.log('Hello')

// Log Elsewhere

const writter = require('./logging/writter');

writter("testWritter", "This is a test writing")