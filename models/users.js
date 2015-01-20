var mongooo = require("mongooo");
var Users   = module.exports = mongooo.build("users");

Users.roles = {
  ADMIN  : 0,
  MEMBER : 1,
  GUEST  : 2
};

Users.generate = function (rawData, callback) {
  var password = rawData.password; // TODO: sha1
  this.create({
    username   : rawData.username,
    email      : rawData.email,
    password   : password,
    role       : rawData.role || Users.roles.GUEST,
    createTime : new Date()
  }, function (error, instance, user) {
    callback(error, user);
  });
};

Users.login = function () {};

Users.prototype.createPost = function () {};
Users.prototype.createComment = function () {};
Users.prototype.getProfile = function () {};
Users.prototype.updateProfile = function () {};

