var fs=require('fs');
fs.unlink('m196.txt',function(err){
	if(err)throw err;
	console.log('file deleted');
});
