const {CommentModel, ValidateComment} = require('../models/comment_model')

exports.saveComment = async (req, res)=>{
    const {error} = ValidateComment(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    try{
        console.log(req.body);
        
        const newComment = new CommentModel({
            name:req.body.name,
            email:req.body.email,
            body:req.body.body,
            postId:req.body.postId
        })
        console.log(newComment);
        

        const saveNew = await newComment.save()
        res.json({
            status:'success',
            message:'Comment uploaded successfully',
        })
    }catch(ex){
        // throw new Error
        res.status(403).send('Failed to post comment')
    }
}


exports.getComment = async (req, res)=>{
    try{
        const allComment = await CommentModel.find()
        res.json({
            status:'success',
            message:'successfully retrieved comments',
            data:allComment
        })
    }catch(ex){
        res.status(403).send('Failed to retrieve comment')
    }
}