//core
const express = require('express');
const path = require('path');
const fs = require('fs');

//router
const hostRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js");
const homeController = require("../controllers/home.js")
const adminController = require("../controllers/admin.js")

//contact-us(GET)
hostRouter.get("/contact-us", homeController.contact_us_get)
//contacted-us(POST)
hostRouter.post("/contact-us", homeController.contact_us_post);

//edit-home(GET)
hostRouter.get("/edit-home/:userId",adminController.edit_home_get);
//edit-home(POST)
hostRouter.post("/edit-home/:userId",adminController.edit_home_post)

//admin-home-list(GET)
hostRouter.get("/admin-home-list",adminController.admin_home_list_get);
//admin-home-list(POST)
hostRouter.post("/admin-home-list",adminController.admin_home_list_post);

//delete
hostRouter.post("/delete-home/:userId", adminController.user_delete);

//export 
exports.host = hostRouter;


