const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const path = require("path");
const flash = require("connect-flash");
const expressSession = require("express-session");
const connectDB = require("./config/mongoose-connection");

require("dotenv").config();

const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");
const indexRouter = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(
  expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "scatchy",
  })
);
app.use(flash());

connectDB();
app.use("/", indexRouter);
app.use("/owner", adminRouter);
app.use("/products", productRouter);
app.use("/user", userRouter);

app.listen(8000, () => {
  console.log("server start on 8000");
});
