let mongoose = require('mongoose');
let test_dbSchema = mongoose.Schema({
    testid:Number,
    testName:String,
    testQuestions:[Number],
    testDuration:String,
},{collection:'test'});
module.exports=mongoose.model('test',test_dbSchema);