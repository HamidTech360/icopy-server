const mongoose = require('mongoose')
const Joi = require('joi-browser')

const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

function ValidateAdmin (user){
    const schema = {
        username: Joi.string().min(5).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(2).required()
 
    }

    return Joi.validate(user, schema)
}
const AdminModel = mongoose.model('admin',adminSchema)

module.exports.ValidateAdmin = ValidateAdmin
module.exports.AdminModel= AdminModel