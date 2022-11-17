const { Router } = require('express')
const { clientController } = require('../controllers/clients.controllers')
const router = Router()

router.post('/', clientController.addClient)
router.get('/', clientController.getClient)
router.patch('/:clientId', clientController.updateClient)
router.delete('/:clientId', clientController.removeClient)

router.patch('/:clientId', clientController.addDrugsInBasket)
router.delete('/:clientId/drug/:drugId', clientController.removeDrugInBusket)
router.patch('/:clientId/payment')
router.patch('/:clientId/replishment', clientController.replenishmentMoney)

module.exports = router