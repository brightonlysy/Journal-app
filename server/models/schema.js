const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    title: {
        type: String,
        required: true,
        default: "No title provided"
    },
    description: {
        type: String,
        required: true,
        default: "No description provided"
    },
    author: {
        type: String,
        required: true,
        default: "Anonymous"
    },
    homeBody: {
        type: String,
        trim: true,
    },
    tags: {
        type: String
    },
    date: {
        type: Date
    }, 
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, )
}

module.exports = mongoose.model('Schema', userSchema)