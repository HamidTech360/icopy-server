const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:'248561599921512',
    api_secret:process.env.api_secret
})

module.exports= {cloudinary}