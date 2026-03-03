//core
const express = require('express');
const path = require('path');
const fs = require('fs');

//router
const hostRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js");


//contact-us(GET)
hostRouter.get("/contact-us", (req, res, next) => {
    console.log(`middleware2(contact-us)`);
    res.render('contact-us',{registeredHomes: registeredHomes, pageTitle: 'Contact Us'});
});

const registeredHomes = [];
//contacted-us(POST)
hostRouter.post("/contact-us", (req, res, next) => {
    if    (req.body.name.length > 0 && req.body.age.length > 0)    {  

        registeredHomes.push({ name: req.body.name ,age: req.body.age,gender: req.body.gender,email: req.body.email,mobile: req.body.mobile});
        console.log(`registration successful for:`, req.body);
        res.render('contacted-us',{pageTitle:'thanks you giving info!'});

    // res.render('home', { registeredHomes: registeredHomes })
    // res.redirect("/"); --> This can also be used

    }else{
        console.log(`empty registration :/`)
        res.render('contacted-us',{pageTitle:'thanks you giving info!'});
    }
    
});

//export 
exports.host = hostRouter;
exports.registeredHomes = registeredHomes;

