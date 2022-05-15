const express=require('express');
const bpodyParser=require('body-parser');
const path=require('path');
const url1=require('url');
const sendmail=require('sendmail');

var app=express();
//===initialize express app

var port=process.env.PORT ||8080;
//===set port number
app.get('/',function(req,res){
	sendmail({
		from:'technosiddiqui@gmail.com',
		to:'siddiquistrange@gmail.com',
		subject:'Hello world',
		html:'Hooray NodeJS!!!'
	})
	res.end();
	
});

app.listen(port);//set the port of app
console.log('Application is running on port'+port);
//===display the port on console

