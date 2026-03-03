exports.user_details_get = (req, res, next) => {
    console.log(`user-details`)
    res.render('store/user-details', { pageTitle: "user details" })
}
exports.user_details_post = (req, res, next) => {
    console.log(`user-details`)
    res.render('store/user-details', { pageTitle: "user details" })
}

exports.user_list_get = (req, res, next) => {
    console.log(`user-list`)
    res.render('store/user-list', { pageTitle: "user list" })
}
exports.user_list_post = (req, res, next) => {
    console.log(`user-list`)
    res.render('store/user-list', { pageTitle: "user list" })
}
