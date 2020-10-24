var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/index", (req, res) => {
  res.redirect("/");
});
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/userhome", (req, res) => {
  res.render("userhome");
});

router.get("/questionpageone", (req, res) => {
  res.render("qpageone");
});

router.get("/userquestion", (req, res) => {
  res.render("userQuestion");
});
// router.get("/signup", (req, res) => {
//   res.render("user/signup");
// });

router.get("/userresult", (req, res) => {
  res.render("userResult");
});

module.exports = router;
