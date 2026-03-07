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
        console.log(err);
        res.redirect("/login");
    });
}