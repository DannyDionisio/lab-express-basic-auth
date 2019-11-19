//main page and private

const { Router } = require("express");
const User = require("../models/user");
const router = Router();


router.get('/main', routeGuard, (req, res, next) => {
  res.render('main');
});

module.exports = router;