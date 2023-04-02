const mongoose = require('mongoose')

const fareSchema = new mongoose.Schema({

    date: {
        type: Date
    },
    time: {
        type: String
    },

    zone: {
        type: String

    },

    fare: {
        type: Number
    }


}, { timestamps: true })

module.exports = mongoose.model("fare", fareSchema)