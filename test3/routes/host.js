//core
const express = require('express');
const path = require('path');

//router
const hostRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js")

//contact-us(GET)
hostRouter.get("/contact-us",(req,res,next) => {
    console.log(`middleware2(contact-us)`);
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
});

//contacted-us(POST)
hostRouter.post("/contact-us",(req,res,next) => {
    console.log(`third middleware(contacted us)`);
    console.log(req.body)
    res.sendFile(path.join(rootDir,'views','contacted-us.html'));
});


//export
module.exports = hostRouter;
