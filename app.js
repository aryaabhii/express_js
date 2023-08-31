// imorting the express in this file.
const express = require("express");
const app     = express();


// syntax
// app.get(route, callback); 

/*
    # The callback  function has 2 parameters, require i.e. req and response i.e. res.
    # The reqest object(req) represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, etc.
    # Similarly, the response object respresents the HTTP response that the express app sends when it receives an HTTP request.
*/

// routing
app.get("/", (req, res) => {
    res.send("Home page.");
});

app.get("/about", (req, res) => {
    res.send("About page..");
});


// server port define.
const port = 8000; 
app.listen(port, () => {
    console.log("Server stated at " + port);
});

