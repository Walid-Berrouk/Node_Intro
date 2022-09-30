const EventEmitter = require('events');
const uuid = require('uuid');

//? Basic Version

// Init object
const eventEmitter = new EventEmitter();

// Event listener
eventEmitter.on('event', () => console.log('Event Fired !'));

// Init Event

eventEmitter.emit('event');
eventEmitter.emit('event');
eventEmitter.emit('event');
eventEmitter.emit('event');


//? Medium Version

// Create class
class MyEmitter extends EventEmitter { }

// Create an eventEmitter object
var myEmitter = new MyEmitter();

// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   myEmitter.emit('data_received');
}

// Bind the connection event with the handler
myEmitter.on('connection', connectHandler);
 
// Bind the data_received event with the anonymous function
myEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

// Fire the connection event 
myEmitter.emit('connection');

console.log("Program Ended.");


//? Advanced Version

// Create class
class MyEmitter extends EventEmitter {
    constructor(username, id) {
        super()
        this.username = username;
        this.id = id;
    }

    // Create an event handler as follows
    connectHandler() {
        console.log('connection succesful with : ');
        console.log('username : ', this.username);
        console.log('id : ', this.id);

        // Fire the data_received event 
        this.emit('data_received');
    }

    dataReceivedHandler() {
        console.log('data received succesfully.');
    }
}

// Create an eventEmitter object
var myEmitter = new MyEmitter("Walid", uuid.v4());

// Bind the connection event with the handler
myEmitter.on('connection', myEmitter.connectHandler);

// Bind the data_received event with the anonymous function
myEmitter.on('data_received', myEmitter.dataReceivedHandler);

// Fire the connection event 
myEmitter.emit('connection');
myEmitter.emit('data_received');

console.log("Program Ended.");