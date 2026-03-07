exports.edit_home_get = (req, res, next) => {
    console.log(`edit-home-get`)
    res.render('admin/edit-home', { pageTitle: "edit home", isLoggedIn: req.isLoggedIn })
}

exports.edit_home_post = (req, res, next) => {
    console.log(`edit-home-post`)
    res.render('admin/edit-home', { pageTitle: "edit home", isLoggedIn: req.isLoggedIn })
}

exports.admin_home_list_get = (req, res, next) => {
    console.log(`admin-home-list-get`)
    res.render('admin/admin-home-list', { pageTitle: "admin home list", isLoggedIn: req.isLoggedIn })
}

exports.admin_home_list_post = (req, res, next) => {
    console.log(`admin-home-list-post`)
    res.render('admin/admin-home-list', { pageTitle: "admin home list", isLoggedIn: req.isLoggedIn })
}

exports.user_delete = (req, res, next) => {
    console.log(`user deleted`);

}