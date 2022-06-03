const { response } = require('express')
const User=require('../model/User')

const index=(req,res,next) =>{
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })

    .catch(error => {
        res.json({
            Message:'An Error Ocurred'
        })
    })
}

const add = (req,res,next) => {
   let user = new User({        _id:req.body._id,


const update = (req,res,next) => {
    let _id = req.body._id
    let updateData={
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
        phoneno:req.body.phoneno
    }
    User.findByIdAndUpdate(_id,{$set:updateData})
    .then(() =>{
        res.json({
            message:'User Updated Succesfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error Occured'
        })
    })
}

const show = (req,res,next) => {
    let _id= req.body._id
    User.findById(_id)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'An Error Occured'
        })
    })
}


const destroy = (req,res,next) => {
    let _id= req.body._id
    User.findOneAndRemove(_id)
    .then(response =>{
        res.json({
            message:'User deleted Succesfully'
        })
    })
    .catch(error => {
        res.json({
            message:'An Error Occured'
        })
    })
}
module.exports={
    index,update,show,destroy
}