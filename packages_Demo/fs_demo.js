const fs = require('fs');
const path = require('path');

// ? Async Versions
// Create a folder

//       // Using standard function
// fs.mkdir(path.join(__dirname, '/test'), {}, function (err) {
//     if (err) throw err;
//     console.log('Folder Created !')
// });

//       // Using arrow function
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder Created !')
// });

// Create and write to File

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!', err => {
//     if (err) throw err;
//     console.log('File written to !')
// })

//     // Overwrites into the file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
//     if (err) throw err;
//     console.log('File written to !')
// })


// Create and write to File

// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to !')

//     // File Append
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
//         if (err) throw err;
//         console.log('File appended to !')
//     })
// })

// Read File

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), (err, data) => {
//     if (err) throw err;
//     console.log('Folder Readed : ' + data)
// });

// Rename a File

// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'),(err) => {
//     if (err) throw err;
//     console.log('Folder Renamed !')
// });

// ? Sync Versions
// See Documentation : https://nodejs.org/docs/latest-v17.x/api/fs.html 