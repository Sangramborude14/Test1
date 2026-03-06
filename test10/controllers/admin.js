const Home = require("../models/home.js");

exports.edit_home_get = (req, res, next) => {
    const editMode = req.query.editing;
    if (!editMode) {
        return res.redirect('/');
    }
    const userId = req.params.userId;
    Home.findById(userId)
        .then(user => {
            if (!user) {
                return res.redirect('/');
            }
            res.render('admin/edit-home', { 
                pageTitle: "Edit Home", 
                editing: editMode,
                user: user
            });
        })
        .catch(err => console.log(err));
}

exports.edit_home_post = (req, res, next) => {
    const userId = req.params.userId;
    const { name, age, gender, mobile, email } = req.body;
    Home.findByIdAndUpdate(userId, { name, age, gender, mobile, email })
        .then(() => {
            console.log(`User updated successfully`);
            res.redirect('/user-list');
        })
        .catch(err => console.log(err));
}

exports.admin_home_list_get = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('admin/admin-home-list', { 
                pageTitle: "admin home list",
                registeredHomes: registeredHomes
            });
        })
        .catch(err => console.log(err));
}

exports.admin_home_list_post = (req, res, next) => {
    res.redirect('/host/admin-home-list');
}

exports.user_delete = (req,res,next) => {
    const userId = req.params.userId;
    Home.findByIdAndDelete(userId)
        .then(() => {
            console.log(`user deleted`);
            res.redirect('/user-list');
        })
        .catch(err => console.log(err));
}