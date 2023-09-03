const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const port = 8000;

// path of the theme
const templatePath = path.join(__dirname, "../templates");
const partialPath = path.join(__dirname, "../templates/partials");

// set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("index");
})


app.listen(port, () => {
    console.log(`Server started at ${port}`);
})