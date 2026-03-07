//local
const User = require("../models/home");
const SignUp = require("../models/signUp");

exports.getLogin = (req, res, next) => {
    res.render("auth/login", { pageTitle: "Login", isLoggedIn: req.isLoggedIn });
}

const bcrypt = require('bcryptjs');

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    
    SignUp.findOne({ email: email })
        .then(user => {
            if (!user) {
                console.log("No user found.");
                return res.redirect('/login');
            }
            return bcrypt.compare(password, user.password)
                .then(match => {
                    if (match) {
                        req.session.isLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            if (err) console.log(err);
                            res.redirect('/');
                        });
                    }
                    console.log("Wrong password.");
                    res.redirect('/login');
                });
        })
        .catch(err => console.log(err));
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
    
    if (password !== confirmpassword) {
        console.log("Passwords do not match");
        return res.redirect("/signup");
    }

    SignUp.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                console.log("Email already exists");
                return res.redirect("/signup");
            }
            const newUser = new SignUp({
                firstname,
                lastname,
                email,
                password, 
                confirmpassword,
                user_type
            });
            return newUser.save();
        })
        .then(result => {
            if (result) {
                console.log("User registered successfully:", email);
                res.redirect("/login");
            }
        })
        .catch(err => {
            console.log("Error during signup:", err);
            res.redirect("/signup");
        });
}