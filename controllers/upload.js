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
                    //res.send('uploaded successfully')
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
            // if(savePost){
            //     response.textUploaded = true
            //     res.json(response)
            // }
       }catch(error){
           res.status(400).send(error)
       }

}