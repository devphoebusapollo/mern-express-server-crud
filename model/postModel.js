const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true
    },
    body: {
        type: String
    },
    comments: [{}],
    credits: [{
        name: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        }
    }]
});

module.exports = mongoose.model('Posts', PostSchema);