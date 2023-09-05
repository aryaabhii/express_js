const express = require("express");
const app     = express();
const hbs     = require("hbs");
const path    = require("path");
const port    = 8000;

// path of the theme 
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "./templates/views");
const partialPath  = path.join(__dirname, "./templates/partials");


// set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.render("index", {
        pageName : "Shop Homepage - Start Bootstrap Template",
    });
})

app.get("/about", (req, res) => {
    res.render("about", {
        pageName : "Shop About - Start Bootstrap Template",
    });
})


app.listen(port, () => {
    console.log(`Server started at ${port}`);
})