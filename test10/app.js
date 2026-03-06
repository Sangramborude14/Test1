//external modules 
const path = require('path');
const express = require('express');
const app = express();

//EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//local modules
const rootDir = require("./utils/pathUtils.js");
const { host } = require("./routes/host.js");
const user = require("./routes/user.js");
const errorController = require("./controllers/error.js");
const { default: mongoose } = require('mongoose')
const PORT = 3005;
const MONGO_URL = "mongodb+srv://sangram2mail:Sangram%40001@cluster1.i7zdkpw.mongodb.net/database1?retryWrites=true&w=majority&appName=cluster1";


//parsing
app.use(express.urlencoded({ extended: true }));

// public middleware
app.use(express.static(path.join(rootDir, 'public')));
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