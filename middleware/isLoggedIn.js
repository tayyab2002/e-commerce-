const jwt = require("jsonwebtoken")

const User = require("../models/user-model")

module.exports = async (req, res, next) => {
    if(!req.cookies.token){
        req.flash("error","you need to login");
        return res.redirect("/");
    }

    try {
        let decode = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await User.findOne({email: decode.email}).select("-password");
        req.user= user
        next();
    } catch (error) {
        req.flash("error", "Something went wrong during login check.");
        return res.redirect("/");
    }
}