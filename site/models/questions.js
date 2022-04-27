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
        type: [{
            type: String
        }],
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
    addedDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    lastUpdated: {
        type: Date,
        required: false
    }
})

module.exports = mongoose.model('Questions', questionsSchema)