//external
const path = require("fs");
const express = require("express");
const server = express();
const session = require('express-session');
const {default: mongoose, Collection}  = require('mongoose');
const MongoDBStore = require('connect-mongodb-session')(session);

//local
const rootDir = require("./utils/pathUtils.js");
const MONOG_URL = "";
const PORT = 8000;
const errorController = require('./controller/error.js');
const blogRouter = require("./routes/blogRouter");

//parsing
server.use(express.urlencoded({extended: true}));


//mongoDB session
const store = new MongoDBStore({
    uri: MONOG_URL,
    collection: 'session'
})

//session
server.use(session({
    secret: "thisisthehashing",
    resave: true,
    saveUninitialized: true,
    store
}));

//public middleware
server.use((req, res, next) => {
    req.isLoggedIn = req.session.isLoggedIn;
    next();
});
server.use(express.static(path.join(rootDir, 'public')));
server.use(user);
server.use("api/blog",blogRouter);



//PORTing
mongoose.connect(MONGO_URL).then(() =>  {
        console.log(`connect to MOngoDB`);
        server.listen(PORT,() => {
            console.log(`backend connected and running at http://localhost${PORT}`);
        })
}).catch(err => {
    console.log(`failed to connect backend`,err)
})
