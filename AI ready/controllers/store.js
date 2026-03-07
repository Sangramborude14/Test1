const Home = require("../models/home.js");

exports.all_user_details_get = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-details', {
                registeredHomes: registeredHomes,
                pageTitle: "all user details",
                viewAll: true
            });
        })
        .catch(err => console.log(err));
}

exports.user_details_get = (req, res, next) => {
    const userId = req.params.userId;
    Home.findById(userId)
        .then(user => {
            res.render('store/user-details', {
                user: user,
                pageTitle: "user details",
                viewAll: false
            });
        })
        .catch(err => console.log(err));
}

exports.user_details_post = (req, res, next) => {
    res.redirect('/user-list');
}

exports.user_list_get = (req, res, next) => {
    console.log(`user-list`);
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-list', {
                registeredHomes: registeredHomes,
                pageTitle: "user details"
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
                pageTitle: "user details"
            });
        })
        .catch(err => console.log(err));
}


exports.appointment_get = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment" })
}
exports.appointment_post = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment" })
}
