//core
const express = require('express');
const path = require('path');

//router
const userRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js")

//home page
userRouter.get("/",(req,res,next) => {
    console.log(`middleware1(home page)`)
    res.sendFile(path.join(rootDir,'views','home.html'));
});

//export
module.exports = userRouter;
