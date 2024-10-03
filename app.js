const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const multer = require("multer");
const path = require("path");
const upload = require("./utils/multer")
const connectDB = require("./config/db")

const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use("/admin", adminRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {

    res.send("<h1>Hello</h1>");
});

app.listen(8000, () => {
  console.log("server start on 8000");
  connectDB();
});
