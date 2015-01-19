var express = require("express");
var normalize = require("path").normalize;
var session = require("express-session");
var bodyParser = require("body-parser");
var config = require("config");

module.exports = function(app) {
  app.use(express.static(normalize(__dirname + "/../public")));
  app.use(session(config.session));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.set("view engine", 'jade');
};
