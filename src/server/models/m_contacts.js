const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    photoUrl:{
        type:String,
        required:true
    }
})

const Contact = mongoose.model('contacts',contactSchema)

module.exports = Contact;