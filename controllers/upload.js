const response = {}
const fs = require ('fs')
const {ValidatePost, PostModel}= require('../models/post_model')

exports.createPost = async (req, res)=>{
        let rename;
        const {error} = ValidatePost(req.body)
        if(error) return res.status(400).send(error.details[0].message)  
       try{
                console.log(req.file);
                
                const fileType = req.file.mimetype.split("/")[1]
                rename = `${req.file.filename}.${fileType}`|| 'none'
                console.log(rename);
                fs.rename(`./uploads/${req.file.filename}`, `./uploads/${rename}`, function(){
                    response.imgUploaded = true
                })
            
           console.log(rename);
           
            const newPost = new PostModel({
                filename:rename,
                body:req.body.body,
                title:req.body.title,
                category:req.body.category
            })
        
            const savePost = await newPost.save()
            res.json(
                {
                    status:"success",
                    messaege:"post uploaded",
                    data:savePost
                }
            )
       }catch(error){
           res.status(400).send(error)
       }

}

exports.getPosts = async (req, res)=>{
    try{
        const allPosts = await PostModel.find()
        res.json({
            status:'success',
            message:'Posts retrieved successfully',
            image_dir:'https://icopy-server.herokuapp.com/static/',
            data:allPosts
        })
    }catch(ex){
        res.status(400).send(ex)
    }
}

exports.getSinglePost = async (req, res)=>{
    try{
        const post = await PostModel.findById(req.params.id)
        res.json({
            status:'success',
            message:'Posts retrieved successfully',
            image_dir:'https://icopy-server.herokuapp.com/static/',
            data:post
        })
    }catch(ex){
        res.status(400).send(ex)
    }
}

exports.editPost = async (req, res)=>{
    let rename;
    const {error} = ValidatePost(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    try{

        // console.log(req.file);
                
        // const fileType = req.file.mimetype.split("/")[1]
        // rename = `${req.file.filename}.${fileType}`|| 'none'
        // console.log(rename);
        // fs.rename(`./uploads/${req.file.filename}`, `./uploads/${rename}`, function(){
        //     response.imgUploaded = true
        // })
    
        // console.log(rename)
        const edit = await PostModel.findByIdAndUpdate(req.params.id, {
            title:req.body.title,
            category:req.body.category,
            body:req.body.body
        }, {new:true})

        res.json({
            status:"success",
            message:'Post edited successfully',
            data:edit
        })

        
    }catch(ex){
        throw new Error
    }
}

exports.deletePost = async (req, res)=>{
    try{
        const deletepost = await PostModel.findByIdAndDelete(req.params.id)
        console.log(deletepost);
        if(deletepost){
            res.json({
                status:'success',
                message:'Post deleted successfully'
            })
        }else{
            res.status(400).send('Cannot find Post with the given Id')
        }
        
    }catch(ex){
        throw new Error
    }

}