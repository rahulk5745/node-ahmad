var fs=require('fs');
fs.writeFile('m196.txt','Hello content',function(err){
	if(err)throw err;
	console.log('Saved');
});
