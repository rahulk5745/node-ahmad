var express=require('express');
var router=express.Router();

/*get have page .redirect user to sigin page */

router.get('/',function(req,res,next){
	res.redirect('/signin');
});
module.exports=router;
