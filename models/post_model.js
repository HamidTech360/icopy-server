const mongoose = require('mongoose')
const Joi = require('joi-browser')

const schema = new mongoose.Schema({
    filename:{
        type:String
    },
    category:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
   
    body:{
        type:String,
        required:true
    }
    
}, {timestamps:true})

const PostModel = mongoose.model('post', schema)

function ValidatePost (post){
    const schema = {
        category:Joi.string().required(),
        title:Joi.string().required(),
        body:Joi.string().required(),
        file:Joi.string()
    }
    return Joi.validate(post, schema)
}

module.exports.PostModel = PostModel
module.exports.ValidatePost= ValidatePost
