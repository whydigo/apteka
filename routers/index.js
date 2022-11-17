const { Router } = require('express')
const router = Router()

router.use('/drugs', require('./drugs.routers'))
router.use('/categories', require('./categories.routers'))
router.use('/clients', require('./clients.routers'))

module.exports = router