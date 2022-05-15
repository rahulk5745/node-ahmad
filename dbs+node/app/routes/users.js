var express=require('express');
var router=express.Router();

/*get user information after login */

router.get('/',isAuthemticated,function(req,res,next){
	var username=req.session.user.username;
	var full_name=req.session.user.full_name;
	res.render('user',{username:username,full_name:full_name});
});

function isAuthemticated(req,res,next){
	if(req.session.user)
		return next();
	//if a user not loggedin then redirect them signin page
	res,redirect('/sign');
}
module.exports=router;
