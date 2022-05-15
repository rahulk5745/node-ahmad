var fs=require('fs');
fs.appendFile('m595.txt','Hello content!',function(err){
	if(err) throw err;
	console.log('saved');
});
