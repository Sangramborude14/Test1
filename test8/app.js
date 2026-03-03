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
const errorController = require("./controllers/error.js")

const PORT = 3005;

//parsing
app.use(express.urlencoded({ extended: true }));

// public middleware
app.use(express.static(path.join(rootDir, 'public')));
app.use(user);
app.use('/host', host);
app.use(errorController.error_404)

//starting PORT
app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
})