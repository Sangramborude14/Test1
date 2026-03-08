//external
const bcrypt = require('bcryptjs')

//local
const User = require("../models/home");
const signUp = require("../models/signUp");

//signup(GET)
exports.getSignUp = (req, res, next) => {
    res.render("auth/signup", { pageTitle: "Sign Up", isLoggedIn: req.isLoggedIn, user: {} });
}

//signup(POST)
exports.postSignUp = (req, res, next) => {
    const { firstname, lastname, email, password, confirmpassword, user_type } = req.body;
    console.log(`signup submitted`);
    bcrypt.hash(password, 12).then(hashedPassword => {
        const user_db = new signUp({ firstname, lastname, email, password: hashedPassword, confirmpassword: hashedPassword, user_type });
        return user_db.save();
    }).then(() => {
        res.redirect("/login");
    }).catch(err => {
        return res.status(422).render("auth/signup", {
            pageTitle: "Signup",
            isLoggedIn: req.isLoggedIn
        })
    })

}

//login(GET)
exports.getLogin = (req, res, next) => {
    res.render("auth/login", { pageTitle: "Login", isLoggedIn: req.isLoggedIn, user: {} });
}

//login(POST)
exports.postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    // if(user_db.findOne({email:email},{password: password}) )
    console.log("Login credentials:", email, password);
    const user = await signUp.findOne({ email: email });
    if (!user) {
        console.error(`user not found!`)
        return res.status(422).render("auth/login", { pageTitle: "login", isLoggedIn: req.isLoggedIn, user: {} })
    }
    const isMatch = await bcrypt.compare(password, user.password);


    if (!isMatch) {
        console.error(`password not correct`)


        return res.status(422).render("auth/login", { pageTitle: "login(invalid password)", isLoggedIn: req.isLoggedIn, user: {} })
    }
    req.session.isLoggedIn = true;
    req.session.user = user;
    return await req.session.save(err => {
        if (err) {
            console.log(err);
        }
        console.log(`logged in successfully as ${user.user_type}`);
        res.redirect('/');
    });


    // req.session.isLoggedIn = true;
    //  req.session.user = user;
    //  console.log(user.user_type); 

    // console.log(`logged in successfully`);



}

//logout
exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        if (err) console.log(err);
        res.redirect("/login");
    });
}
