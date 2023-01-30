const express=require('express');

const app=express();
const expressLayout=require('express-ejs-layouts');
const port=8000;

app.use(expressLayout);

//setup the view engine
app.set('view engine','ejs');
app.set('views','./views');
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error : ${err}`);
    }
    console.log(`Server is running @ ${port}`);
});