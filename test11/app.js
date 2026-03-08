//external modules 
const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const multer = require('multer');
const { default: mongoose } = require('mongoose');

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//local modules
const rootDir = require("./utils/pathUtils.js");
const { host } = require("./routes/host.js");
const user = require("./routes/user.js");
const errorController = require("./controllers/error.js");
const authController = require("./controllers/auth.js");
const authRouter = require('./routes/auth.js');
const randomString = require('./utils/randomUtil.js')
const PORT = 3005;
const MONGO_URL = "mongodb+srv://sangram2mail:Sangram%40001@cluster1.i7zdkpw.mongodb.net/database1?retryWrites=true&w=majority&appName=cluster1";

//file upload & download
const storage = multer.diskStorage({
    destination: (req,file, cb) => {
        cb(null,"uploads/");
    },
    filename: (req,file,cb) => {
        cb(null,randomString(10) + "-" + file.originalname);
    }
})
const multerOptions = {
   storage
}


//parsing
app.use(express.urlencoded({ extended: true }));
app.use(multer(multerOptions).single('file'));
app.use(express.static(path.join(rootDir, 'public')));
app.use("/uploads", express.static(path.join(rootDir,'uploads')))

//monogoDB session
const store = new MongoDBStore({ 
    uri: MONGO_URL,
    collection: 'sessions'
})

//session
app.use(session({
    secret: "sangram",
    resave: false,
    saveUninitialized: true,
    store
}))



// public middleware
app.use((req, res, next) => {
    req.isLoggedIn = req.session.isLoggedIn;
    next();
});

app.use(authRouter);
app.use((req, res, next) => {
    if (req.session.isLoggedIn) {
        next();
    } else {
    res.redirect("/login");}
})
app.use(user);

app.use('/host', host);

app.use(errorController.error_404);

//starting PORT
mongoose.connect(MONGO_URL).then(() => {
    console.log(`connected to mongoDB`);
    app.listen(PORT, () => {
        console.log(`server running at http://localhost:${PORT}`);
    })
}).catch(err => {
    console.log(`error while connecting`, err)
})