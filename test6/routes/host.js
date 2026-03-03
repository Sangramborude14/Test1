//core
const express = require('express');
const path = require('path');
const fs = require('fs');

//router
const hostRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js");
const homeController = require("../controllers/home.js")


//contact-us(GET)
hostRouter.get("/contact-us", homeController.contact_us_get)
//contacted-us(POST)
hostRouter.post("/contact-us", homeController.contact_us_post);


//export 
exports.host = hostRouter;


