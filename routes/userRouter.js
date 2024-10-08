const express = require("express");
const router = express.Router();

const { userRegister, userLogin } = require("../controllers/userController");

router.get("/", function (req, res) {
  res.send("Working.....");
});
router.post("/register", userRegister);

router.post("/login", userLogin);

router.get("/logout", function (req, res) {
  res.cookie("token", "");
  req.flash("success", "You have been logged out");
  res.redirect("/");
});
module.exports = router;
