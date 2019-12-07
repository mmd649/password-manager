const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    title: String,
    url: String,
    username: String,
    password: String
});

module.exports = mongoose.model('Account', accountSchema);
