const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const core =require('cors');
const mongoose= require('mongoose');
const PORT=5000;
app.use(core());//to use middile were core
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/user',{useNewUrlParser:true});
const connection=mongoose.connection;
connection.once('open',function()
{
    console.log("mongodb data base connected succesfully");
})
app.listen(PORT,function()//this function is to run server on the port 5000 when succsesfully run check by printing this
{
    console.log("Server is running on port number"+PORT);
});
/*---------------------------------connection above------------------------- */ 

const todoRoutes=express.Router();
let User =require('./user');
todoRoutes.route('/').get(function(req,res){
    User.find(function(err,todos)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            res.json(todos);
        }
         
    });
});
app.use('/user', todoRoutes);//link will use user collection in mongodb
todoRoutes.route('/Rigister').post(function(req,res)
{
    let user=new User(req.body);
    user.save()
        .then(user=>{
            res.status(200).json({'User':'Registered succesfully'});
        })
        .catch(err =>{
            res.status(400).send('Registration failed');
        });
    
});





