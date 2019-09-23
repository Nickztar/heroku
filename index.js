const express = require("express");
let app = express();


app.get("/", (req, res) => {
    res.send("omay wushing dairu");
});


const port = process.env.port || 3000;
app.listen(port, ()=>{console.log("running")});