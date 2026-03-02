//core
const express = require('express');
const path = require('path');
const fs = require('fs');

//router
const hostRouter = express.Router();

//local
const rootDir = require("../utils/pathUtils.js")

//contact-us(GET)
hostRouter.get("/contact-us", (req, res, next) => {
    console.log(`middleware2(contact-us)`);
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

//contacted-us(POST)
hostRouter.post("/contact-us", (req, res, next) => {

    const filePath = path.join(rootDir, 'data', 'userInfo.json');
    const newInfo = req.body;

    //read file
    fs.readFile(filePath, (err, fileContent) => {
        let userData = [];
        if (!err && fileContent.length > 0) {
            userData = JSON.parse(fileContent);
        }

        //add new data
        userData.push(newInfo);


        //saving into JSON
        fs.writeFile(filePath, JSON.stringify(userData, null, 2), (err) => {
            if (err) {
                console.log(`Error writing the file`, err);
                return res.status(500).send("server error :(")
            }
            console.log("Data saved");

            // --- NEW: Injecting Data into HTML ---
            const successHtmlPath = path.join(rootDir, 'views', 'contacted-us.html');
            fs.readFile(successHtmlPath, 'utf8', (err, htmlContent) => {
                if (err) {
                    console.log(`Error reading success HTML`, err);
                    return res.status(500).send("Registration successful, but error showing page.");
                }

                // Format the user info nicely
                const userInfoHtml = `
                    <div id ="UserInfoDiv">
                       <p>Name: ${newInfo.name}</p>
                       <p>Age: ${newInfo.age}</p>
                    </div>
                `;

                // Replace the placeholder in the template with actual content
                const finalHtml = htmlContent.replace('<!-- USER_INFO_PLACEHOLDER -->', userInfoHtml);
                res.send(finalHtml);
            });
        })
    })
});


//host-login(GET)
hostRouter.get("/host-login", (req, res, next) => {
    console.log(`host login GET success`)
    console.log(`arrived at host login`);
    res.sendFile(path.join(rootDir, 'views', 'host-login.html'));
})
//host-login(POST)
hostRouter.post("/host-login", (req, res, next) => {
    console.log(`logging in `);
    const successLoginPath = path.join(rootDir, 'views', 'host-login.html');
    fs.readFile(successLoginPath, 'utf8', (err, htmlContent) => {
        if (err) {
            console.log(`Error reading success HTML`, err);
        }
        console.log(req.body)
        if (req.body.password === "1234") {
            const hostSuccesshtml = `
                    <div >
                     login successful <a href="/host/user-data"> DATABASE</a>
                    </div>
                `;
            const finalHtml = htmlContent.replace('<!--Login_Success-->', hostSuccesshtml);
            res.send(finalHtml);
        } else {
            res.send(`<h1> Login failed return <a href="/">Home</a>`)
        }

    });
});

hostRouter.get("/user-data", (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'userData.html'));
});


//export
module.exports = hostRouter;
