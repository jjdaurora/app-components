// /models/Card.js

const mongoose = require('mongoose');
const {Schema} = mongoose;

const cardSchema = new Schema({
    source: String,
    author: String,
    description: String,
    readingTime: Number,
    sentiment: String,
    keywords: Array,
    trending: Number,
})

console.log(cardSchema)
mongoose.model('cards', cardSchema);