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