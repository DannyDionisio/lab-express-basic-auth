const { Router } = require("express");
const bcrypt = require("bcrypt");
const router = Router();
const User = require("../models/user");

router.get("/", (req, res, next) => {
  res.render("login");
});

router.post("/", (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({
    username
  })
    .then(user => {
      if (bcrypt.compareSync(password, user.get("password"))) {
        res.redirect("/");
        // login
      }
      // palavra passe errada
    })
    .catch(next);
});

module.exports = router;
