//core
const express = require('express');

//router
const authRouter = express.Router();

//local
const authController = require("../controllers/auth");

//login(GET)
authRouter.get("/login",authController.getLogin);

//login(POST)
authRouter.post("/login", authController.postLogin);

//logout(POST)
authRouter.post("/logout",authController.postLogout);

//export
module.exports = authRouter;