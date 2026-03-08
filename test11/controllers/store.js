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
    const errorMessage = req.query.error === 'unauthorized' ? "You don't have permission to delete the user" : null;
    Home.find()
        .then(registeredHomes => {
            res.render('store/user-list', {
                registeredHomes: registeredHomes,
                pageTitle: "user details",
                isLoggedIn: req.isLoggedIn,
                user: req.session.user,
                errorMessage: errorMessage
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

exports.appointment_get = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment", isLoggedIn: req.isLoggedIn,user: req.session.user});
}
exports.appointment_post = (req, res, next) => {
    console.log(`appointment`)
    res.render('store/appointment', { pageTitle: "appointment", isLoggedIn: req.isLoggedIn,user: req.session.user})
}

