var users = require("../models/users")
var views = require("./views")

exports.signin = function(req, res, next) {
  var name     = req.body.name || ""
  var password = req.body.password
  users.signin(name, password, function(error, user) {
    if (error) {
      req.errorMessage = error
      views.signin(req, res, next)
    } else {
      req.session.user = user
      res.redirect('/')
    }
  })
}
