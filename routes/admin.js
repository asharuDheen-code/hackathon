var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("adminhome");
});

router.get("/adminhome", (req, res) => {
  res.redirect("/");
});

module.exports = router;
