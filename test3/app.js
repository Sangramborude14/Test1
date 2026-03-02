//external modules 
const path = require('path');
const express = require('express');
const app = express();


//local modules
const rootDir = require("./utils/pathUtils.js");
const host = require("./routes/host.js");
const user = require("./routes/user.js");

const PORT = 3005;

//parsing
app.use(express.urlencoded({extended: true}));

app.use(user);
app.use('/host',host);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

app.listen(PORT,() => {
    console.log(`running at http://localhost:${PORT}`);
})