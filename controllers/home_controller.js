module.exports.home=function(req,res){
    //return res.end('<h1>Express is up for social media</h1>')
    console.log(req.cookies);
    res.cookie('name',28);
    return res.render('home',{
        title:"Home page"
    });
}