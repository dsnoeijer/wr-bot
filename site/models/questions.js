const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    firstHint: {
        type: String,
        required: true
    },
    secondHint: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    lastUpdated: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Questions', questionsSchema)