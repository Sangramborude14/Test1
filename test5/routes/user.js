//core
const express = require('express');
const path = require('path');

//router
const userRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js");
const { registeredHomes } = require('./host.js');

//home page
userRouter.get("/", (req, res, next) => {
    console.log(`middleware1(home page)`)
    res.render('home', { registeredHomes: registeredHomes, pageTitle: 'Home' })
});

//export
module.exports = userRouter;
