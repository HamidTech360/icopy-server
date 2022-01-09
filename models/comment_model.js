const mongoose = require('mongoose')
const Joi = require('joi-browser')

const schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    
    body:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    }
    
}, {timestamps:true})

const CommentModel = mongoose.model('coment', schema)

function ValidateComment (post){
    const schema = {
        name:Joi.string().required(),
        email:Joi.string().required(),
        body:Joi.string().required(),
        postId:Joi.string().required() 
    }
    return Joi.validate(post, schema)
}

module.exports.CommentModel = CommentModel
module.exports.ValidateComment= ValidateComment
