//external modules
const express = require('express');
const path = require('path');

//internal modules
const userRouter = require("./routes/userRouter.js");
const hostRouter = require("./routes/host.js");
const rootDir =  require("./utils/pathUtil.js");
const PORT = 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(userRouter);
app.use("/host", hostRouter);

//404 not found
app.use((req,res,next) => {
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})
app.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
});