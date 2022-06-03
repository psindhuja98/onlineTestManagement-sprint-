const User = require('../model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res,next) => {
        bcrypt.hash(req.body.password,10,function(err,hashedPass){
            if(err)
            {
                res.json({
                    error:err
                })
            }
            let user=new User({
                _id:req.body._id,
                username:req.body.username,
                email:req.body.email,
                phoneno:req.body.phoneno,
                password:hashedPass
            })
            user.save()
            .then(user=>{
                res.json({
                    message:'User Register Succesfully'
                })
            })
            .catch(error=>{
                res.json({
                    message:'An Error Occured!'
                })
            })          
        })
        
}

const login =(req,res,next) => {
    var uname = req.body.uname
    var password = req.body.password

    User.findOne({$or: [{email:uname},{phoneno:uname}]})
    .then(user => {
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({username:user.username},'verySecretValue',{expiresIn:'1h'})
                    res.json({
                        message:'Login Succesfull!',
                        // token
                        
                    })
                }else{
                    res.json({
                        message:'password does not matched'
                    })
                }
            })
        }else{
            res.json({
                message:'No User Found'
            })
        }
    })
}

module.exports={
    register,login
}