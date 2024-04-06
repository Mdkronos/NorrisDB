
const { Schema, model } = require('mongoose');

const creditSchema = new Schema({
    creditname: {
        type: String,
        required: true,
        unique: true
    },
    discipline: {
        type: String,
        required: true,
        enum: ['Movie', 'Serie', 'Videogame']
    },
    character: {
        type: String,
        required: true
    },
    date: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})

const CreditModel = model('Credit', creditSchema);

module.exports = CreditModel; // Exporto el modelo de creditos