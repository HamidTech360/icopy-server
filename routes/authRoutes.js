const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const {createAdmin, authAdmin, editAdmin, getAdmin} = require('../controllers/auth')


router.post('/create_admin', createAdmin)
router.get('/create_admin', auth, getAdmin)
router.post('/auth_admin', authAdmin)
router.put('/create_admin',auth, editAdmin)


module.exports = router;