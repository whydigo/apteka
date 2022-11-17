const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: String,
    money: Number,
    basket: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'drugs'
    }],
    recept: Boolean
})

const Client = mongoose.model('clients', clientSchema)

module.exports = Client