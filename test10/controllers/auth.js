exports.getLogin = (req,res,next) => {
    res.render("auth/login",{pageTitle: "Login"});
}

exports.postLogin = (req, res, next) => {
    const { email, password } = req.body;
    console.log("Login credentials:", email, password);
    // Placeholder for authentication logic. For now, redirect to Home.
    res.redirect('/');
}
