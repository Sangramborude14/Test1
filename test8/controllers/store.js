const Home = require("../models/home.js");

exports.user_details_get = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/user-details', {
            registeredHomes: registeredHomes,
            pageTitle: "user details"
        })
    });
}
exports.user_details_post = (req, res, next) => {
    Home.fetchAll((registeredHomes) => {
        res.render('store/user-details', {
            registeredHomes: registeredHomes,
            pageTitle: "user details"
        })
    });
}

exports.user_list_get = (req, res, next) => {
    console.log(`user-list`)
   Home.fetchAll((registeredHomes) => {
        res.render('store/user-list', {
            registeredHomes: registeredHomes,
            pageTitle: "user details"   
        })
    });
}
exports.user_list_post = (req, res, next) => {
    console.log(`user-list`)
    Home.fetchAll((registeredHomes) => {
        res.render('store/user-list', {
            registeredHomes: registeredHomes,
            pageTitle: "user details"
        })
    });
}

exports.appointment_get = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment" })
}
exports.appointment_post = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment" })
}
