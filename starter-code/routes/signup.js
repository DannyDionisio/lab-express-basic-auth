"use strict";

const {
  Router
} = require("express");
const bcrypt = require("bcrypt");
const router = Router();
const User = require("../models/user");

router.get("/", (req, res, next) => {
  res.render("signup");
});

router.post("/", (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  User.create({
    username,
    password: bcrypt.hashSync(password, 5)
  }).then(() => {
    res.redirect('/login')
  }).catch(next);
});

module.exports = router;