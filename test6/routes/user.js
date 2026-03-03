//core
const express = require('express');
const path = require('path');

//router
const userRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js");
const homeController = require("../controllers/home.js")


//home page
userRouter.get("/", homeController.home_page);

//export
module.exports = userRouter;
