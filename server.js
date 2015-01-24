var express = require("express")
var config  = require("config")
var app     = express()

function configure() {
  require("./appConfig/mongooo")(app)
  require("./appConfig/express")(app)
  require("./appConfig/models")(app)
}

function attachRouters() {
  require("./routers/index")(app)
  require("./routers/users")(app)
}

exports.start = function() {
  configure()
  attachRouters()
  app.listen(config.server.port, function() {
    console.log("Server is listening on port ", config.server.port)
  })
}

exports.stop  = function() {
  process.exit(0)
}
