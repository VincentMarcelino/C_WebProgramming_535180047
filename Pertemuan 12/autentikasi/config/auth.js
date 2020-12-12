module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash("error_msg", "error harap logon");
      res.redirect("/users/login");
    },
  };