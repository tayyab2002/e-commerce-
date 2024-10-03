const mongoose = require("mongoose");

const adminScheme = mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        minLength: 3
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    products:{
        type: Array,
        default: []
    },
    picture: String,
    gstin : String,
})

module.exports = mongoose.model("admin", adminScheme);