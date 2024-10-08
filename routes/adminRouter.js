const express = require("express");
const Admin = require("../models/admin");

const router = express.Router();

router.post("/create", async function (req, res) {
  let admin = await Admin.find();
  if (admin.length > 0) {
    return res.status(500).send("You don't have permission to create a owner");
  }

  let { fullname, email, password } = req.body;
  let createdUser = await Admin.create({
    fullname,
    email,
    password,
  });
  res.status(201).send(createdUser);
});

router.get("/admin", function (req, res) {
  let success = req.flash("success");
  res.render("createproduct", { success });
});

module.exports = router;
