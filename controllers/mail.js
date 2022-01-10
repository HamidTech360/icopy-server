const nodemailer = require('nodemailer')
const {AdminModel} = require('../models/admin_model')
const Joi= require('joi-browser')
const config = require ('../config')

function Validate (item){
    const schema = {
        email: Joi.string().required(),
        name:Joi.string().required(),
        mailBody:Joi.string().required()
    }
    return Joi.validate(item, schema)
}

exports.sendMail = async (req, res)=>{
    const {error} = Validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    try{

        const find_email = await AdminModel.find()
        const admin_email = find_email[0].email

        
        let transporter = nodemailer.createTransport({
            service:'gmail',
            auth:{
              user: config.EMAIL,
              pass: config.PASSWORD
            }
          })

          
      let mailOptions = {
        from:'ICopy Story Blog',
        to: admin_email,
        subject: `${req.body.name} sent you an email`,
        html:`<div>
                  ${req.body.mailBody}
                  <div>connect with me at ${req.body.email}</div>
              </div>`
      }


      transporter.sendMail(mailOptions, async function(err, data){
        if(err){
     
          res.status(500).send('SOmething failed in the server')
        }else{

          res.json({
              status:'success',
              message:'Email sent successfully'
          })

        }
      })


    }catch(ex){
        res.status(500).send('Can"t send email.')
    }
}