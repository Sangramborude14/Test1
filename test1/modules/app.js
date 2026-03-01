const express = require('express');
const http = require('http');
const app = express();

app.get((req, res, next) => {
    console.log(`this is the first middleware`, req.path, req.method);
    next();
})

// app.get((req, res, next) => {
//     console.log(`this is the second middleware`);
//     res.send(`<p> this response ends here </p>`)
// })
app.get('/', (req, res, next) => {
    console.log(`this is the third middleware`);
    res.send(`<p>handeling / page </p>`)
})
app.get('/contact-us', (req, res, next) => {
    console.log(`this is the contact us (get)`);
    res.send(`<p>Please provide your details</p>s
        <form  action="/contact-us" method="POST"> 
        <input type="text" name="name">
        <input type="email" name="email">
        <button type="submit">Submit</button>
        </form>`)
})

app.post("/contact-us", (req, res, next) => {
    console.log(`handeling contact-us for POST`);
    res.send(`<p>Thank you for providing your details</p>`)
})
const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server at http://localhost:${PORT}`);
})
//hello this is a comment

