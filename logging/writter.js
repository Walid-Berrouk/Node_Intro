const fs = require('fs');
const path = require('path');

function writter(file, message, logger) {
    fs.writeFile(path.join(__dirname, file), message, err => {
        if (err) throw err;
    })

    logger.log('Writter in : ' + file + 'The following : ' + message)
}

module.exports = writter