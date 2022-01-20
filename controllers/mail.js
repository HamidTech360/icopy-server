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


        const user_name     = config.EMAIL
        const refresh_token = config.REFRESH_TOKEN;
        const access_token  = config.ACCESS_TOKEN;
        const client_id     = config.CLIENT_ID;
        const client_secret = config.CLIENT_SECRET;
    
        const email_to = 'hammedowolabi2001@gmail.com';
    
        // const nodemailer = require('nodemailer');
    
        let transporter = nodemailer
        .createTransport({
            service: 'Gmail',
            auth: {
                type: 'OAuth2',
                clientId: client_id,
                clientSecret: client_secret
            }
        });
        transporter.on('token', token => {
            console.log('A new access token was generated');
            console.log('User: %s', token.user);
            console.log('Access Token: %s', token.accessToken);
            console.log('Expires: %s', new Date(token.expires));
        });
        // setup e-mail data with unicode symbols
        let mailOptions = {
            from    : user_name, // sender address
            to      : email_to, // list of receivers
            subject : 'Hello ✔', // Subject line
            text    : 'Hello world ?', // plaintext body
            html    : '<b>Hello Haamid ?</b>', // html body
    
            auth : {
                user         : user_name,
                refreshToken : refresh_token,
                accessToken  : access_token,
                expires      : 1494388182480
            }
        };

        
      //   let transporter = nodemailer.createTransport({
      //       service:'gmail',
      //       auth:{
      //         user: config.EMAIL,
      //         pass: config.PASSWORD
      //       }
      //     })

          
      // let mailOptions = {
      //   from:'ICopy Story Blog',
      //   to: admin_email,
      //   subject: `${req.body.name} sent you an email`,
      //   html:`<div>
      //             ${req.body.mailBody}
      //             <div>connect with me at ${req.body.email}</div>
      //         </div>`
      // }


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