const Home = require("../models/home");
const User = require("../models/signUp")
const fs = require('fs');

exports.edit_home_get = (req, res, next) => {
    console.log(`edit-home-get`)
    res.render('admin/edit-home', { pageTitle: "edit home", isLoggedIn: req.isLoggedIn, user: req.session.user })
}

exports.edit_home_post = (req, res, next) => {
    console.log(`edit-home-post`)
    res.render('admin/edit-home', { pageTitle: "edit home", isLoggedIn: req.isLoggedIn, user: req.session.user })
}

exports.admin_home_list_get = (req, res, next) => {
    console.log(`admin-home-list-get`)
    res.render('admin/admin-home-list', { pageTitle: "admin home list", isLoggedIn: req.isLoggedIn, user: req.session.user })
}

exports.admin_home_list_post = (req, res, next) => {
    console.log(`admin-home-list-post`)
    res.render('admin/admin-home-list', { pageTitle: "admin home list", isLoggedIn: req.isLoggedIn, user: req.session.user })
}

exports.user_delete = (req, res, next) => {
    const userAuth = req.session.user;
    const userId = req.query.id;
    if (userAuth && userAuth.user_type === "host") {
        Home.findByIdAndDelete(userId)
            .then(() => {
                console.log(`user deleted`)
                res.redirect("/user-list");
            })
            .catch(err => {
                console.log(err);
                res.redirect("/user-list");
            });
    } else {
        res.redirect("/user-list?error=unauthorized");
    }
}