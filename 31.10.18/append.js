var fs=require('fs');
fs.appendFile('m196.txt','hello append content!',function(err){
	if(err) throw err;
	console.log('Saved!');
});

