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
  // set jade global variables
  app.locals.title = "博客 - blog / Bosson Chan";
  app.locals.page  = "home";
  app.locals.urls  = {
    home   : "/home",
    about  : "/about",
    signin : "/signin",
    search : "/search",
    rss    : "/",
    error  : "/error"
  };
  app.locals.user  = "";
};
