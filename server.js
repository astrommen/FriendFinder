// Dependency
var express = require("express");
// var path = require("path");

// creating our server
var app = express();

// sets initial Port to listen
var PORT = process.env.PORT || 3306;

// middleware for parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// router
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener
app.listen(PORT, function(){
  console.log("App listening on PORT: " + PORT);
});