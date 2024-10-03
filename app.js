const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const upload = require("./utils/multer")

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req, res) => {

    res.send("<h1>Hello</h1>");
});

app.listen(8000, () => {
  console.log("server start on 8000");
});
