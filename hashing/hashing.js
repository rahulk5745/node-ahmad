/*
What is Hashing?

hashing is a process of generating a fixed length value from a string using mathmetical function 
it is used providibng security/.
every hash generating using hashing is:

	unique:
	in hashing , for every unique input we will get unique output. we will get the same output for same input to matter how many you input the same data but if we just slighty change the input it will change output to a large extent.
	Fixed length:
	hashing algorithm always generates the hash with the same length. the lenght of input does not effect the length of the output.
	irreversible:
	Generated hashes are irreversible in nature. we can not change the hash to the input text again.
	
*/

var crypto=require('crypto');
//creating hash object
var hash=crypto.createHash('md5');
//passing the data to be hashed 
data=hash.update('welcome8','utf-8');
//xcreating the hash in the required formate
gen_hash=data.digest('hex');
