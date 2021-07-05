const mongoose = require('mongoose')

const Car = mongoose.Schema({

    targa: {
        type: String,
        required: true,
        unique: true,
        id: true
    },
    modello: {
        type: String,
        required: true
    },

    marca: {
        type: String,
        required: true
    },

    colore: {
        type: String,
        required: true
    },

    cilindrata: {
        type: Number,
        required: true
    },

    porte: {
        type: Number,
        required: true
    },

    annoProduzione: {
        type: Number,
        required: true
    },

    dataImmatricolazione: {
        type: Date,
        required: true,
        default: Date.now
    }

})

module.exports = mongoose.model('Car',Car);