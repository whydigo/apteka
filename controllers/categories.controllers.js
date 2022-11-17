const Category = require('../models/Category.model')

module.exports.categoryController = {

    //===========================Базовые фишки=============================================================================

    addCategory: (req, res) => {
        Category.create({
            name: req.body.name
        })
        .then((category) => { res.json(category) })
    },

    getCategory: (req, res) => {
        Category.find()
        .then((category) => { res.json(category) })
    },

    updateCategory: (req, res) => {
        Category.findByIdAndUpdate(req.params.categoryId, {
            name: req.body.name
        }, { new: true }).then((category) => { res.json(category) })
    },

    removeCategory: (req, res) => {
        Category.findByIdAndRemove(req.params.categoryId).then(() => { res.json('deleted') })
    }


}