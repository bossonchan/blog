var mongooo = require("mongooo");
var Histories   = module.exports = mongooo.build("histories");

Histories.types = {
  CREATE_POST    : "cp",
  UPDATE_POST    : "up",
  DELETE_POST    : "dp",
  CREATE_COMMENT : "cc",
  DELETE_COMMENT : "dc",
  CREATE_REPLY   : "cr",
  DELETE_REPLY   : "dr"
};

Histories.generate = function(rawData, callback) {
  this.create({
    createTime   : new Date(),
    creator      : rawData.creator,
    type         : rawData.type,
    instance     : rawData.instance
  }, function(error, instance, history) {
    callback(error, history);
  });
};

