const mongoose = require("mongoose");

const productScheme = mongoose.Schema({
   image: String,
   name: String,
   prices: Number,
   discount: {
    type: Number,
    default: 0,
   },
   bgcolor: String,
   panelcolor : String,
   textcolor : String,
});

module.exports  = mongoose.model("product", productScheme);
