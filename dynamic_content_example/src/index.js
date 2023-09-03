const express = require("express");
const path    = require("path");
const app     = express();
const port_no = 3000;

const staticPath = path.join(__dirname, "../public");
// const tempPath   = path.join(__dirname, "../template") // this is the path of theme or view

// to set view engine...
app.set("view engine", "hbs");

// to change the name of views 
// app.set("views", tempPath);

// template engine route
app.get("", (req, res) => {
    res.render("index", {
        name : "Abhijeet Kumar",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
})

app.listen(port_no, () => {
    console.log(`Server started at ${port_no}`);
});