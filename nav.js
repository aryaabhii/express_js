/*
   # Naviagtion:
        Routing
*/

const express = require("express");
const app     = express();


app.get("/", (res, req) => {
    res.status(200).send("Welcome to about pahe....................")
});