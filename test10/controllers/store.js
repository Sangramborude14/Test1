const Home = require("../models/home.js");

exports.user_details_get = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-details', {
                registeredHomes: registeredHomes,
                pageTitle: "user details",
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            });
        })
        .catch(err => console.log(err));
}

exports.user_details_post = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-details', {
                registeredHomes: registeredHomes,
                pageTitle: "user details",
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            });
        })
        .catch(err => console.log(err));
}

exports.user_list_get = (req, res, next) => {
    console.log(`user-list`);
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-list', {
                registeredHomes: registeredHomes,
                pageTitle: "user details",
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            });
        })
        .catch(err => console.log(err));
}

exports.user_list_post = (req, res, next) => {
    console.log(`user-list`);
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-list', {
                registeredHomes: registeredHomes,
                pageTitle: "user details",
                isLoggedIn: req.isLoggedIn,
                user: req.session.user
            });
        })
        .catch(err => console.log(err));
}


exports.appointment_get = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment", isLoggedIn: req.isLoggedIn,user: req.session.user});
}
exports.appointment_post = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment", isLoggedIn: req.isLoggedIn,user: req.session.user})
}

