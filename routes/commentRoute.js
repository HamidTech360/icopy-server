const express = require('express')
const router = express.Router()
const {saveComment, getComment} = require('../controllers/comment')


router.post('/', saveComment)
router.get('/', getComment)




module.exports = router