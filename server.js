var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//sets up Expresss app with option of Heroku hosting
var PORT = process.env.PORT || 7777;
var app = express();

//sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

