const { Router } = require('express')
const { categoryController } = require('../controllers/categories.controllers')
const router = Router()

router.post('/admin', categoryController.addCategory)
router.get('/admin', categoryController.getCategory)
router.patch('/admin/:categoryId', categoryController.updateCategory)
router.delete('/admin/:categoryId', categoryController.removeCategory)

module.exports = router