// Module Wrapper Function

// (function (exports, require, module, __filename, __dirname) {

// })

console.log("file name : ", __filename)
console.log("directory name : ", __dirname)

function printFunc(func = "nothing") {
    console.log( "Hello from", func);
 }
 
 // Now call above function after 2 seconds
 setTimeout(printFunc, 2000);
setTimeout(() => printFunc("setTimeout"), 2000);

// Now call above function after 2 seconds
setInterval(() => printFunc("setInterval"), 2000);