const {JWT_SECRET} = require('../config')
const jwt = require('jsonwebtoken')
const Joi = require('joi-browser')
const bcrypt = require('bcrypt')
const {ValidateAdmin, AdminModel} = require('../models/admin_model')

exports.createAdmin = async (req, res)=>{
    const {error} = ValidateAdmin(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
    const getAdmin = await AdminModel.findOne({email:req.body.email})
    if(getAdmin) return res.status(403).send('An admin with this email already exist')

    const newAdmin = new AdminModel({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })

    // const salt = await bcrypt.genSalt(10)
    // newAdmin.password = await bcrypt.hash(newAdmin.password, salt)

    try{
        const saveAdmin = await newAdmin.save()
        res.json({
            message:'Admin created successfully',
            data:saveAdmin
        })
    }catch(ex){
        res.status(400).send(ex)
    }
}

exports.authAdmin = async (req, res)=>{
    const {error} = Validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    try{
        const getAdmin = await AdminModel.findOne({email:req.body.email})
        if(!getAdmin) return res.status(403).send('Admin not found')

        // const checkPassword = await bcrypt.compare(req.body.password, getAdmin.password)
         const checkPassword = await AdminModel.findOne({password:req.body.password})
        if(!checkPassword) return res.status(401).send('Invalid password')

        const token = jwt.sign({...getAdmin}, JWT_SECRET)
        res.json({
            status:'success',
            message:"user authorized",
            token:token,
        })
    }catch(ex){
        res.status(400).send(ex)
    }
    
}


exports.editAdmin = async (req, res)=>{

    const {error} = Validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    try{
        console.log(req.user);
        // const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const admin = await AdminModel.findOneAndUpdate(
            {_id:req.user._doc._id},
            {password:req.body.password, email:req.body.email},
            {new:true}
        )
        res.json({
            status:'success',
            message:'Record updated',
            data:admin
        })
    }catch(ex){
        res.status(400).send(ex)
    }
}

exports.getAdmin = async (req, res)=>{
    try{
        const admin = await AdminModel.findById(req.user._doc._id)
        console.log(req.user)
        res.json({
            status:'success',
            data:admin
        })
    }catch(ex){
        res.status(400).send(ex)
    }
}

exports.getAdminBasic = async (req, res)=>{

    try{
        const admin = await AdminModel.find()
        admin.map(el=>el.password="")
        res.json({
            status:'success',
            data:admin
        })
    }catch(ex){
        res.status(400).send(ex)
    }
}


function Validate (user){
    const schema = {
        email: Joi.string().required(),
        password:Joi.string().required()
    }
    return Joi.validate(user, schema)
}