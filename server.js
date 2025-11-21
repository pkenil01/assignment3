// server.js
var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
var bookRoutes = require("./routes/books");
app.use("/", bookRoutes);

app.listen(3000);
console.log("Server started on http://localhost:3000");

module.exports = app;
