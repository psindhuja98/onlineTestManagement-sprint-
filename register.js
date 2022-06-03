let mongoose = require('mongoose');
let registrationProcessSchema = mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    password:String,
    mobileNumber:Number
},{collection:'userRegistration'});
let Registration = module.exports=mongoose.model('Registration',registrationProcessSchema);