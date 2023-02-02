const User=require('../models/user');

module.exports.profile = function(req, res){
    return res.render('profile', {
        title: 'User Profile'
    })
   
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title: 'Codeial | Sign Up'
    });
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title: 'Codeial | Sign In'
    });
}

//sign up for the user
module.exports.create=function(req,res){
    //TODO
    if(req.body.password != req.body.confirm_password)
    {
        return res.redirect('/');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('Error in finding the user in signing up');return;}
        
        if(!user)
        {
            User.create(req.body,function(err,user){
                if(err){console.log('Error in creating user while signing up');return;}

                return res.redirect('/users/sign-in')
            })
        }
        else{
            return res.redirect('/');
        }
    })

}


//sign in(log in for the user)
module.exports.createSession=function(req,res){
    //TODO
}
