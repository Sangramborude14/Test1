//core modules
const path = require('path');

//host router
const express = require("express");
const hostRouter = express.Router();

const rootDir =  require("../utils/pathUtil.js");

hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
})

hostRouter.post("/add-home", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
})

module.exports = hostRouter;
