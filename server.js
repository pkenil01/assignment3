// load the express module
var express = require("express");
// create an express application
var app = express();
// view engine setup
app.set("view engine", "ejs");
// allow us to read data from HTML forms
app.use(express.urlencoded({ extended: true }));
// use the public folder for static files
app.use(express.static("public"));
// load book routes file
var bookRoutes = require("./routes/books");
// routes for all paths starting at "/"
app.use("/", bookRoutes);
// start the server on port 3000
app.listen(3000);
// message to indicate server is running
console.log("Server started on http://localhost:3000");
// export the app for testing purposes
module.exports = app;

//testing123