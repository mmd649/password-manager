const   mongoose                = require('mongoose'),
        passportLocalMongoose   = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    accounts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Account"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
