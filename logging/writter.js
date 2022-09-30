const fs = require('fs');
const path = require('path');
const Logger = require('./logger')

function writter(file, message) {

    const logger = new Logger();

    fs.writeFile(path.join(__dirname, file), message, err => {
        if (err) throw err;
    })

    logger.on('message', (data) => {
        console.log('Called Listner: ', data)
        fs.appendFile(path.join(__dirname, '/logs', 'logs.txt'), `id :${data.id} has made message : ${data.message} \n`, err => {
                if (err) throw err;
                console.log('File appended to !')
            })
    })

    logger.log('Writter in : ' + file + ' the following : ' + message)
}

module.exports = writter