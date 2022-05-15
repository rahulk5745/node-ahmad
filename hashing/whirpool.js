/*
whorpool hashing algorithm: this hashing algorithm takes input of any length less than 2256 bits and o/p a 512-bits hash.
*/

//loading the crypto module in node,js
var crypto=require('crypto');
//creating hash object
var hash=crypto.createHash('whirpool');
//passing data to be hashed 
data=hash.update('welcome','utf-8');
//creating the hash in the required formate
gen_hash=data.digest('hex');
//printing to the output on the console
console.log("hash:"+gen_hash);
