const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const {createAdmin, authAdmin, editAdmin} = require('../controllers/auth')


router.post('/create_admin', createAdmin)
router.post('/auth_admin', authAdmin)
router.put('/create_admin',auth, editAdmin)


module.exports = router;