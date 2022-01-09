const express = require('express')
const router = express.Router()
const multer = require('multer')
const auth = require('../middlewares/auth')
const {
    createPost,
     getPosts, 
     editPost, 
     deletePost, 
     getSinglePost
} = require('../controllers/upload')


const upload = multer({dest:"./uploads/"})



router.post('/post',upload.single('file'),auth, createPost)
router.get('/post/:id', getSinglePost)
router.get('/post', getPosts)
router.put('/post/:id', auth, editPost)
router.delete('/post/:id',auth, deletePost)

// router.post('/', upload.single('file'), async(req, res)=>{

//     const fileType = req.file.mimetype.split("/")[1]
//     const rename = `${req.file.filename}.${fileType}`
//     console.log(rename);
//     fs.rename(`./uploads/${req.file.filename}`, `./uploads/${rename}`, function(){
//         //res.send('uploaded successfully')
//         response.imgUploaded = true
//     })

//     const newPost = new PostModel({
//         filename:rename,
//         text:req.body.text
//     })

//     const savePost = await newPost.save()
//     if(savePost){
//         response.textUploaded = true
//         res.json(response)
//     }
    
// })



module.exports = router