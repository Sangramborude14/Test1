//core modules
const path = require('path');

//host router
const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));
})

hostRouter.post("/add-home", (req, res, next) => {
    res.send(
        `<h1> Home Registered Successfully</h1>
        <a href="/">Go back Home</a>`
    )
})

module.exports = hostRouter;
