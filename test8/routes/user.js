//core
const express = require('express');
const path = require('path');

//router
const userRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js");
const homeController = require("../controllers/home.js")
const storeController = require("../controllers/store.js")


//home page
userRouter.get("/", homeController.home_page);

//user-details(GET)
userRouter.get("/user-details", storeController.user_details_get);

//user-details(POST)
userRouter.post("/user-details", storeController.user_details_post);

//user-list(GET)
userRouter.get("/user-list", storeController.user_list_get);

//user-list(POST)
userRouter.post("/user-list", storeController.user_list_post);

//appointment(GET)
userRouter.get("/appointment", storeController.appointment_get);

//appointment(POST)
userRouter.post("/appointment", storeController.appointment_post);


//export
module.exports = userRouter;
