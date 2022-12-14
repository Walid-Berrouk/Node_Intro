const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// print object URL
console.log(myUrl)

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host)

// Hostname (doesn't include the port, else same as Host)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serialized Query
console.log(myUrl.search)

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}` ))