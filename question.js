const express=require("express");
const path=require('path');
const mongoose=require("mongoose");
const bodyParser = require("body-parser");
const router=express.Router();
let qP =require('./model/questionPaper');
const questionPaper = require("./model/questionPaper");
const Question=require('./model/questionPaper');
let paper=require('./model/questionPaper');

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
app.get('/getQus',(req,res)=>{
    questionPaper.find({},function(err,qusData){
        res.json(qusData);
    })
    
    });

    //get by id
    app.get('/:_id',(req,res)=>{
        questionPaper.findById({_id:req.params._id},function(err,qusData){
            res.json(qusData);
        })
    })
    
    app.post('/add-qus',(req,res)=>{
    
        let questionPaper=new Question({
            _id:req.body._id,
            question:req.body.question,
            choices:req.body.choices,
            answer:req.body.answer
         } );
         /*
        questionPaper.question=req.body.question;
        questionPaper.choices=req.body.choices;
        questionPaper.answer=req.body.answer;
        */
        questionPaper.save((err,doc)=>{
            if(err){
                console.log("error is:"+err)
                return;
            }else{
                res.send(doc);
            }
        });
    });
    //update the method
    app.put('/update/:_id',(req,res)=>{
        let questionPaper= {};
            questionPaper._id=req.body._id;
            questionPaper.question=req.body.question;
            questionPaper.choices=req.body.choices;
            questionPaper.answer=req.body.answer;
            console.log("question id is:"+req.params._id);
            
    
        paper.updateOne({_id:req.params._id},questionPaper,(err)=>{
            if(err){
                console.log("error is:"+err)
                return;
            }else{
                res.json(questionPaper)
            }
        })
    });
    //update by id

    
    //delete the method
    app.delete('/delete/:_id',(req,res)=>{
    
        questionPaper.deleteOne({_id:req.params._id},function(err) {
    
            if(err){
                console.log(err);
                return;
            }else{
                res.send("Deleted successfully");
            }
        })
    });
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
});