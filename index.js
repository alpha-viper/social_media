const express=require('express');

const app=express();
const expressLayout=require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const db=require('./config/mongoose');
const port=8000;

app.use(expressLayout);
app.use(express.urlencoded());
app.use(cookieParser());

app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(express.static('./assets'));
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