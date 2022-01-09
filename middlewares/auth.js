const {JWT_SECRET} = require('../config')
const jwt = require('jsonwebtoken')
function auth (req, res, next){
    const token = req.header('Authorization')
    
    
    if(!token) return res.status(403).send('Access denied')

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user= decoded
        next()
    }catch(ex){
        res.status(400).send('Invalid token supplied')
    }
}

module.exports= auth