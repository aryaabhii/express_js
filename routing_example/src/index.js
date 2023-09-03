/*
   # Naviagtion:
        Routing Example
*/
const path    = require("path");
const express = require("express");
const app     = express();

// relative path: ../../


// console.log(__dirname); // wrapper function

const staticPath = path.join(__dirname, "../public");

// built-in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.status(200).send("Welcome to the home page. 🏠" );
});

app.get("/about", (req, res) => {
    res.status(200).send("Welcome to the about page. 😃")
});

app.get("/contact", (req, res) => {
    res.status(200).send("Welcome to the contact page. 😃")
});

const port = 8000;
app.listen(port, () => {
    console.log("Server started at : " + port);
});