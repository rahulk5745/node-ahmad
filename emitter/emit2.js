var events=require('events');
var eventemitter=new events.EventEmitter();

//create a event handler
var myEventHandler=function(){
	console.log('I hear a scream!');
}

//Assign the eventhandler to an event:
eventEmitter.on('abc',myEventHandler);

//fire the 'scream'event:
eventEmitter.emit('abc');
