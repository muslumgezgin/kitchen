function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send("unauthorized");
  }
}

module.exports = {
  isLoggedIn
};
