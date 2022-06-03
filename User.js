const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    _id:{
        type:Number
    },
    username:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    phoneno:{
        type:String
    },

},{timestamps:true})

const User=mongoose.model('User',userSchema)
module.exports=User