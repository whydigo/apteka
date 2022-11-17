const { Router } = require('express')
const { drugController } = require('../controllers/drugs.controllers')
const router = Router()

router.post('/admin', drugController.addDrug)
router.get('/admin', drugController.getDrug)
router.patch('/admin/:drugId', drugController.updateDrug)
router.delete('/admin/:drugId', drugController.removeDrug)

router.get('/:categoryId', drugController.getDrug)
router.get('/:drugId', drugController.getDrugById)

module.exports = router