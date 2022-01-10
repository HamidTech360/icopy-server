const express = require('express')
const router = express.Router()
const auth = require('../middlewares/auth')
const {createAdmin, authAdmin, editAdmin, getAdmin, getAdminBasic} = require('../controllers/auth')


router.post('/create_admin', createAdmin)
router.get('/create_admin', auth, getAdmin)
router.get('/get_admin', getAdminBasic)
router.post('/auth_admin', authAdmin)
router.put('/create_admin',auth, editAdmin)


module.exports = router;