//external modules
const express = require("express");

//internal modules
const userRouter = require("./userRouter.js");
const hostRouter = require("./host.js");

const PORT = 3000;
const app = express();

// app.get("/", (req, res, next) => {
//     console.log(req.url, req.method);
//     res.send(`<h1> Welcome to NORD</h1>
//         <a href= "/add-home">Add Home</a>`);
//     next();
// })

app.use(express.urlencoded({ extended: true }));



app.use(userRouter);
app.use("/host", hostRouter);

//404 not found
app.use((req,res,next) => {
    res.status(404).send(`<h1>404 error ! Page not found :(`)
})
app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
});