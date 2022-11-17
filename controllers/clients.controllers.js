const Client = require('../models/Client.model')
const Drug = require('../models/Drug.model')

module.exports.clientController = {

    //Базовые фишки

    addClient: (req, res) => {
        Client.create({
            name: req.body.name,
            money: req.body.money,
            basket: req.body.basket
        })
            .then((client) => { res.json(client) })
    },

    getClient: (req, res) => {
        Client.find()
            .then((client) => { res.json(client) })
    },

    updateClient: (req, res) => {
        Client.findByIdAndUpdate(req.params.clientId, {
            name: req.body.name,
            money: req.body.money,
            basket: req.body.basket
        }, { new: true }).then((client) => { res.json(client) })
    },

    removeClient: (req, res) => {
        Client.findByIdAndRemove(req.params.clientId).then(() => { res.json('deleted') })
    },

    //============================Не базовые фишки==========================================================================

    addDrugsInBasket: async (req, res) => {
        try {
            const drug = await Drug.findById(req.params.drugId)
            const client = await Client.findById(req.params.clientId)

            if (drug.recept && !client.recept) {
                return res.json('нет рецепта')
            }

            await Client.findByIdAndUpdate(req.params.clientId, {
                $addToSet: {
                    basket: req.body.drugId,
                },
            })
            res.json("Лекарство добавлена в корзину")
        }
        catch (err) {
            res.json(err)
        }
    },

    removeDrugInBusket: async (req, res) => {
        try {
            await Client.findByIdAndRemove(req.params.clientId, {
                $pull: { basket: req.body.drugsId }
            })
            res.json('Лекарство удалена из корзины')
        } catch (error) { res.json(error) }
    },

    cartPayment: async (req, res) => {
        try {
            const client = await Client.findById(req.params.clientId)
                .populate('basket')
            const finalSum = client.basket.reduce((sum, drug) => {
                return sum + drug.price
            }, 0)
            if (client.money > finalSum) {
                return req.json('бомж')
            }
            await Client.findByIdAndUpdate(req.params.clientId, {
                basket: []
            })
            res.json('покупка прошла успешно')
        }
        catch (err) {
            res.json(err)
        }
    },

    replenishmentMoney: async (req, res) => {
        try {
            const client = await Client.findById(req.params.clientId)
            
            let summa = client.money + req.body.money
            await Client.findByIdAndUpdate(req.params.clientId, {
                $set: {
                    money: summa
                }
            })
            res.json('Оплата прошла успешно')
        }
        catch (err) {
            res.json(err)
        }
    }
}