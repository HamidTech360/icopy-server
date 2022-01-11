const express = require('express')
const app = express()
const mongoose = require('mongoose')
const upload = require('./routes/uploadRoutes')
const admin = require('./routes/authRoutes')
const comment = require('./routes/commentRoute')
const mail= require('./routes/mailRoute')
const cors = require('cors')
const {PORT, DATABASE_URL, JWT_SECRET} = require('./config')
const path = require('path')

if(!JWT_SECRET){
    console.error('No Jwt Provided');
    process.exit(1)
}

mongoose.connect(DATABASE_URL)
.then(()=>console.log('connection successfuly established'))
.catch(()=>console.log('Failed to establish connection'))

app.use('/static', express.static(path.join(__dirname, './uploads')))
app.use(express.urlencoded({limit:'50mb', extended:true}))
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use('/api/upload', upload)
app.use('/api/admin', admin)
app.use('/api/comment', comment)
app.use('/api/mail', mail)

// const port = process.env.PORT || PORT
app.listen(PORT, ()=>console.log(`listening to port ${PORT}`))
