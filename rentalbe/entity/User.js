const mongoose = require('mongoose')

const User = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        id: true
    },
    password: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required: true
    },
    dataDiNascita: {
        type: Date,
        required: true
    },
    ruolo: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', User);