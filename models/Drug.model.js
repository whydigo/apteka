const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
    name: String,
    price: Number,
    recept: Boolean
})

const Drug = mongoose.model('drugs', drugSchema)

module.exports = Drug