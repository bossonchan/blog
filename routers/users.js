var users = require("../controllers/users")
var validation = require("../middlewares/validation")

module.exports = function(app) {
  app.post('/signin', validation.signin, users.signin)
}
