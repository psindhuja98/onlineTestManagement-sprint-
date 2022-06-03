const express=require("express");
const path=require('path');
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const router=express.Router();
let qP =require('./model/testPaper');
const test_db = require("./model/testPaper");
const Id=require('./model/testPaper');
let testName=require('./model/testPaper');
let test=require('./model/testPaper');
let paper=require('./model/testPaper');
const questionPaper = require("./model/questionPaper");

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
app.get('/getId',(req,res)=>{
    test.find({},function(err,idData){
        res.json(idData);
    })
    
    });

    //get by id
    app.get('/:testid',(req,res)=>{
        test.find({testid:req.params.testid},function(err,idData){
            res.json(idData);
        })
    })
    
    
    app.post('/add-id',(req,res)=>{
    
        let testPp=new Id({
            testid:req.body.testid,
            testName:req.body.testName,
            testQuestions:req.body.testQuestions,
            testDuration:req.body.testDuration
        
         } );
         
        testPp.save((err,doc)=>{
            if(err){
                console.log("error is:"+err)
                return;
            }else{
                res.send(doc);
            }
        });
    });
    //update the method
    
    app.patch('/:testid',(req,res)=>{
        let test= {};
        
        test.id=req.params.id;
        //let dbCollection =questionPaper.find({},{_id:1});
        //console.log(dbCollection);
        test.testQuestions=req.body.testQuestions;
            console.log("question id is:"+req.params.testid);
            console.log("question id is:"+req.body.testQuestions);
           
        let paper={};
        
       questionPaper._id=req.body.id;
        console.log(questionPaper._id);
        //console.log(test.id);
        test.updateOne({testid:req.params.id},test,(err)=>{
            if(err){
                console.log("error is:"+err)
                return;
            }else{
                
                for(var j=0;j<=test.testQuestions.length;j++){
                   if(test.testQuestions[j]==dbCollection) {
                      res.json(test);
                   }
                }
                res.send("Question is not available.");               
            }
        })
    });
    //update 
    //app.put('/:id',(req,res)=>{
        //let test= {};
            //test.id=req.body.id;
            //test.testName=req.body.testName;
            //test.testQuestions=req.body.testQuestions;
            //test.testDuration=req.body.testDuration;
            //console.log("question id is:"+req.params.id);
            
    
        //paper.updateOne({id:req.params.id},test,(err)=>{
         //   if(err){
           //     console.log("error is:"+err)
            //    return;
            //}else{
            //    res.json(test)
            //}
        //})
   // });

    
    //delete the method
    app.delete('/delete/:id',(req,res)=>{
    
        test.deleteOne({id:req.params.id},function(err) {
        
    
            if(err){
                console.log(err);
                return;
            }else{
                res.send("Deleted successfully");
            }
        })
    });
    //search
    app.get('/search/:testName',(req,res)=>{
        
        test.find({testName:req.params.testName},function(err,idData){
            res.json(idData);
        })
    })


    
    
    
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});