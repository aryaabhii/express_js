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

/*
    String query : by the help of this we can get the data from url
    URL:  http://127.0.0.1:8000/about?name=Abhijeet&address=Delhi
    DATA: { name: 'Abhijeet', address: 'Delhi' }
*/
app.get("/about", (req, res) => {
    // console.log(req.query);
    res.render("about", {
        pageName : "Shop About - Start Bootstrap Template",
        name : req.query.name,
        address : req.query.address,
    });
})

app.get("/about/*", (req, res) => {
    res.render("404", {
        errorComment : "OOPS! About Page Not found",
        code         : "404"
    });
});

app.get("*", (req, res) => {
    res.render("404", {
        errorComment : "OOPS! Not found",
        code         : "404"
    });
});


app.listen(port, () => {
    console.log(`Server started at ${port}`);
})