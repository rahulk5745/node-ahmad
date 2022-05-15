/*
SHA1 hashing algorithm : Secure Hash Algorithm 1 is a cryptographic hash function which generates a hash value which is typically rendered as a hexadecimal number of exactly 40 digits long. It produces a 160-bit hash value which is known as message digest. 
*/
//Loading the crypto module in node.js
var crypto = require('crypto');
//creating hash object 
var hash = crypto.createHash('sha1');
//passing the data to be hashed
data = hash.update('kaka', 'utf-8');
//Creating the hash in the required format
gen_hash= data.digest('hex');
//Printing the output on the console
console.log("hash : " + gen_hash);
									