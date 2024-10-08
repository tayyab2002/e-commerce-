const express = require("express");

const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../models/product-model");
const userModel = require("../models/user-model");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

router.get("/shop", isLoggedIn, async function (req, res) {
  try {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", { products, success });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/addtocart/:productid", isLoggedIn, async function (req, res) {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    user.cart.push(req.params.productid);
    await user.save();
    req.flash("success", "Added to Cart");
    res.redirect("/shop");
  } catch (error) {
    console.log(error.message);
    
  }
});

router.get("/cart", isLoggedIn, async function (req, res) {
  try {
    let user = await userModel
      .findOne({ email: req.user.email })
      .populate("cart");
      let bill = Number(user.cart.price) + 20 - Number(user.cart.discount) ;
    res.render("cart", { user, bill});
  } catch (error) {
    console.log(error.message);
    
  }
});

module.exports = router;
