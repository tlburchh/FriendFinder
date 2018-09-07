var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//sets up Express app with option of Heroku hosting
var PORT = process.env.PORT || 7777;
var app = express();

//sets up Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//serve static assets (if added)
app.use(express.static(__dirname + "app/public"));

//connect to path files
var htmlRoutes = require("./app/routing/htmlRoutes")(app, path);
var apiRoutes = require("./app/routing/apiRoutes")(app, path);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

