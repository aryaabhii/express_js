const express = require("express");
const app     = express();
const path    = require("path");

const staticPath = path.join(__dirname, "../public")

// built-in middle ware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.status(200).send("OK");
});

const port_no = 8000;
app.listen(port_no, () => {
    console.log(`Server started at ${port_no}`);
});