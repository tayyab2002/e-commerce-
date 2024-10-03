const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: String,
    cart:{
        type: Array,
        default: []
    },
    isadmin: Boolean,
    orders:{
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
});

module.exports  = mongoose.model("user", userScheme);
