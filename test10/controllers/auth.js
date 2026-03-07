//local
const User = require("../models/home");
const SignUp = require("../models/signUp");

exports.getLogin = (req, res, next) => {
    res.render("auth/login", { pageTitle: "Login", isLoggedIn: req.isLoggedIn });
}

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
     console.log("Login credentials:", email, password);
    req.session.isLoggedIn = true;
    res.redirect('/');
}


exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) console.log(err);
        res.redirect("/login");
    });
}

//signup(GET)
exports.getSignUp = (req, res, next) => {
    res.render("auth/signup", { pageTitle: "Sign Up", isLoggedIn: req.isLoggedIn });
}

//signup(POST)
exports.postSignUp = (req, res, next) => {
    const { firstname, lastname, email, password, confirmpassword, user_type } = req.body;
    console.log(`signup submitted`);
    const user_db = new User({firstname, lastname, email, password, confirmpassword, user_type});
    res.redirect("/login");
}