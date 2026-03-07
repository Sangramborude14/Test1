//local modules
const Home = require("../models/home.js");

//contact-us(GET)
exports.contact_us_get = (req, res, next) => {
    console.log(`middleware2(contact-us)`);
    res.render('store/contact-us', { pageTitle: 'Contact Us' });
}

//Contact-us(POST)
exports.contact_us_post = (req, res, next) => {

    if (req.body.name.length > 0 && req.body.age.length > 0) {
        const { name, age, gender, mobile, email } = req.body;
        const user = new Home({ name, age, gender, mobile, email }) // Home--> Class imported from models/home.js || home --> object of class Home
        user.save().then(() => console.log(`home saved successfully!`));                                              // function of Home
        console.log(`registration successful for:`, req.body);
        res.render('store/contacted-us', { pageTitle: 'thanks you giving info!' });

        // res.render('home', { registeredHomes: registeredHomes })
        // res.redirect("/"); --> This can also be used

    } else {
        console.log(`empty registration :/`)
        res.render('store/contacted-us', { pageTitle: 'thanks you giving info!' });
    }
}

//home_page(GET)
exports.home_page = (req, res, next) => {
    Home.find()
        .then(registeredHomes => {
            res.render('store/home', { registeredHomes: registeredHomes, pageTitle: 'Home' });
        })
        .catch(err => {
            console.log(err);
        });
    console.log(`middleware1(home page)`)

}
