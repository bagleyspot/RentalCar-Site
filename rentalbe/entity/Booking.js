const mongoose = require('mongoose')

const Booking = mongoose.Schema({
    codicePrenotazione: {
        type:String,
        required: true,
    },
    dataInizio: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dataFine: {
        type: Date,
        required: true,
        default: Date.now()
    },
    targaVeicolo: {
        type: String,
        required: true,
    },
    usernameUtente: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Booking",Booking)