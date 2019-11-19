//private page

const { Router } = require("express");
const User = require("../models/user");
const router = Router();

router.get("/private", routeGuard, (req, res, next) => {
  res.render("private");
});

module.exports = router;