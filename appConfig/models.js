module.exports = function(app) {
  var users = require("../models/users")
  users.destroy({
    $or: [
      { username: "bossonchan" },
      { email : "bossonchan@gmail.com" }
    ]
  }, function(error) {
    if (error) return console.log(error)
    users.generate({
      username : "bossonchan",
      email    : "bossonchan@gmail.com",
      password : "baixin",
      role     : users.roles.ADMIN
    }, function(error) {
      if (error) return console.log(error)
    })
  })
}
