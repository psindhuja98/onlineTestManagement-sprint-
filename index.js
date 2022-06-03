const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require('body-parser')

const UserRoute =require('./routes/user')
const LoginRoute=require('./routes/login')
const app=express()



mongoose.connect("mongodb://localhost:27017/project",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Succesfully Connected with Mongodb")
    }
})
app.use(bodyParser.json())
app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})

app.use('/user',UserRoute)
app.use('/',LoginRoute)