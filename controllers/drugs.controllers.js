const Drug = require('../models/Drug.model')

module.exports.drugController = {

    //Базовые фишки

    addDrug: (req, res) => {
        Drug.create({
            name: req.body.name,
            price: req.body.price,
            recept: req.body.recept
        })
        .then((drug) => { res.json(drug) })
    },

    getDrug: (req, res) => {
        Drug.find()
        .then((drug) => { res.json(drug) })
    },

    getDrugById: (req, res) => {
        Drug.findById(req.params.drugId)
        .then((drug) => { res.json(drug) })
    },

    getDrugbyCategory: (req, res) => {
        Drug.find({ category: req.param.categoryId })
        .then((drug) => { res.json(drug) })
    },

    updateDrug: (req, res) => {
        Drug.findByIdAndUpdate(req.params.drugId, {
            name: req.body.name
        }, { new: true })
        .then((drug) => { res.json(drug) })
    },

    removeDrug: (req, res) => {
        Drug.findByIdAndRemove(req.params.drugId)
        .then(() => { res.json('deleted') })
    }

}