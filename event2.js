var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler
var myEventHandler = function(){
    console.log('I hear a scream!');

}
//asign the event handler to an event;
eventEmitter.on('scream', myEventHandler);

// fire the scream event:
eventEmitter.emit('scream');
