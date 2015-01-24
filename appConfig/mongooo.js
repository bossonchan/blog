var config = require("config")

module.exports = function(app) {
  var mongooo = require("mongooo")
  mongooo.config(config.mongooo)
}
