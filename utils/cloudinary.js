const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name:'hamidcloud',
    api_key:'248561599921512',
    api_secret:'ZadKMMfNDGXRHUXPMsG5uIAmw4U'
})

module.exports= {cloudinary}