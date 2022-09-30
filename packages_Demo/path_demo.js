const path = require('path');

console.log(" ");

// Base file name
console.log(__filename);
console.log(path.basename(__filename));

console.log(" ");

// Directory name

console.log(__dirname);
console.log(path.dirname(__filename));

console.log(" ");

// File Extension

console.log(path.extname(__filename));

console.log(" ");

// Create path object

console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

console.log(" ");

// Concatenate paths

    // Work when having different delimiters for ex: windows /, mac \ ...
console.log(path.join(__dirname, 'test', 'hello.html'));

console.log(" ")