let mongoose = require('mongoose');
let questionPaperSchema = mongoose.Schema({
    _id:Number,
    question:String,
    choices:[String],
    answer:String,
},{collection:'questionPaper'});
module.exports=mongoose.model('questionPaper',questionPaperSchema);