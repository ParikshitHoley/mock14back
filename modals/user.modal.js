const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {type : String} ,
    level : {tpye : String} ,
    score : {type : Number}

},
    {
    timestamps:true
})

const User = mongoose.model('user', userSchema)

module.exports = {
    User
}
