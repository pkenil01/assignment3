//testing-routes
const express = require("express");
//testing-routes
const router = express.Router();
//testing-routes
router.get("/", (req, res) => {
//testing-routes
  res.render("home");
});
//testing-routes
module.exports = router;
//testing-routes