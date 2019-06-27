const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema1 = new Schema({
    username: {
        type: String,
        require: true,
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

module.exports = mongoose.model("User", userSchema1)

//pre-save() => encypts users password before saving to DB
userSchema1.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hashed) => {
        if(err) return next(err)
        user.password = hashed
        next()
    })
})

//checkPassword   => Checks user's password attempt against the encrypted password
userSchema1.methods.checkedPassword = function(passwordAttemt, callback){
    bcrypt.compare(passwordAttemt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        callback(null, isMatch)
    })
}
//withoutPassword => remove encrypted password from user object before sending sever response
userSchema1.methods.withoutPassword = function(){
    const user = this.toObject()
    delete user.password
    return user
}