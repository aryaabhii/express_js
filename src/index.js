const express = require("express");
const path    = require("path");
const app     = express();
const port_no = 3000;

const staticPath = path.join(__dirname, "../public");
console.log(staticPath);
// to set view engine...
app.set("view engine", "hbs");

// template engine route
app.get("", (req, res) => {
    res.render("index");
});

// app.get("/", (req, res) => {
//     res.send('Hello');
// })

app.listen(port_no, () => {
    console.log(`Server started at ${port_no}`);
});