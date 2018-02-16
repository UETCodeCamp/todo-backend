const Mongoose = require('mongoose');
const {Schema} = Mongoose;
const connection = require('../app.database');

const todoSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        index: true,
    },
    title: {
        type: String,
        trim: true
    },
    complete: {
        type: Boolean,
        default: false,
        index: true
    }
});

module.exports = connection.model('Todo', todoSchema);