const express=require("express");
const path=require('path');
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const router=express.Router();
let userRegistration=require('./model/register');
let Registration =require('./model/register');



//connecting Mongodb server
mongoose.connect('mongodb://localhost:27017/Project');
let db=mongoose.connection;
//when connection open
db.once('open',function(){
    console.log('Connection is opened');
});

//check for db error
db.on('error',function(err){
    console.log(err);
});
//init app
const app=express();

//parse application/x-www-form-urlencoded-for inserting
app.use(bodyParser.urlencoded({extended:false}))

//parse application/json-For inserting
app.use(bodyParser.json())

// getting data
app.get('/getReg',(req,res)=>{
    userRegistration.find({},function(err,regData){
        res.json(regData);
    })
    
    });

    //get by id
    app.get('/:_id',(req,res)=>{
        userRegistration.find({_id:req.params._id},function(err,regData){
            res.json(regData);
        })
    })
    
    app.post('/add-reg',(req,res)=>{
    
        let userRegistration=new Registration();
        userRegistration.name=req.body.name;
        userRegistration.email=req.body.email;
        userRegistration.password=req.body.password;
        userRegistration.mobileNumber=req.body.mobileNumber;
        console.log(userRegistration.name);
        console.log(userRegistration.email);
        console.log(userRegistration.password);
        console.log(userRegistration.mobileNumber);
            
         
        userRegistration.save((err)=>{
            if(err){
                console.log("error is:"+err)
                return;
            }else{
                res.send(userRegistration);
            }
        });
    });
    app.listen(3000,()=>{
        console.log("Server is running at port 3000");
    });