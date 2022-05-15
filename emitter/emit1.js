var event=require('events');
var eventEmitter=new event.EventEmitter();
//listner #1
var listner1=function listener1(){
	console.log('listner1 encoded');
}

//listner #2
var listner2=function listener2(){
	console.log('listner2 encoded');
}

//bind the connection event with the listner1 function
eventEmitter.add.listener('connection',listner1);

// bind the connection event with the listner2 function
eventEmitter.on('connection',listner2);

var eventListener=require('events').EventEmitter.ltenerCount(eventEmitter,'connection');
console.log(eventListener+"Listener(s) listening to connection event");

//fire the connection event
eventEmitter.emit('connection');

//rempove the binding of listner1 function
eventEmitter.removeListener('connection',listner1);

// fire te conection event 
eventEmitter=require('connection');

eventListener=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventlisteners+"listner(s) listening to connection event");

console.log("program ended.");
