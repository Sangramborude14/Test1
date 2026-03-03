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
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

const registeredHomes = [];
//contacted-us(POST)
hostRouter.post("/contact-us", (req, res, next) => {
registeredHomes.push({userName: req.body.name})
console.log(`registration successful for:`,req.body);
res.render('home', registeredHomes);
});

//export 
exports.host = hostRouter;
exports.registeredHomes = registeredHomes;

