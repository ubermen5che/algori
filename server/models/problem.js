const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
    },
    step: {
        type: Number,
        require: true
    },
    notificationDate: {
        type: String,
    },

    tagList: {
        type: Array
    },
    content: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Problem', problemSchema);