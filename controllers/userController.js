const generateToken = require("../utils/generateToken");
const bcrpt = require("bcrypt");
const User = require("../models/user-model");

const userRegister = async (req, res) => {
  try {
    let { email, fullname, password } = req.body;
    let existUser = await User.findOne({ email: email });
    if (existUser) {
      return res.status(401).send("user already existing, Please Login.");
    }
    bcrpt.genSalt(10, (err, salt) => {
      bcrpt.hash(password, salt, async (err, hash) => {
        if (err) return res.send(err.message);
        else {
          let creatUser = await User.create({
            fullname,
            email,
            password: hash,
          });
          let token = generateToken(creatUser);
          res.cookie("token", token);
          res.redirect("/shop");
        }
      });
    });
  } catch (error) {
    res.send(error.message);
  }
};

const userLogin = async (req, res) => {
  try {
    let { email, password } = req.body;
    let checkUser = await User.findOne({ email: email });    
    if (!checkUser) {
      return res.redirect("/");
    }

    bcrpt.compare(password, checkUser.password, (err, result) => {
      if (result) {
        let token = generateToken(checkUser);
        res.cookie("token", token);
        res.redirect("/shop");
      } else {
        req.flash("error" ,"Something went wrong")
        res.redirect("/");
      }
    });
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { userRegister, userLogin };
