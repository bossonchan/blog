var config = require("config");

module.exports = function(app) {
  require("mongooo").config(config.mongooo);
};
