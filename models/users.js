var mongooo = require("mongooo")
var crypto  = require("crypto")
var Users   = module.exports = mongooo.build("users")

Users.roles = {
  ADMIN  : 0,
  MEMBER : 1,
  GUEST  : 2
}

Users.hashPassword = function(password) {
  var shasum = crypto.createHash("sha1")
  shasum.update(password)
  return shasum.digest("hex")
}

Users.generate = function (rawData, callback) {
  var password = this.hashPassword(rawData.password)
  this.create({
    username   : rawData.username,
    email      : rawData.email,
    password   : password,
    role       : rawData.role || Users.roles.GUEST,
    createTime : new Date()
  }, function (error, instance, user) {
    callback(error, user)
  })
}

Users.signin = function (name, password, callback) {
  var password = this.hashPassword(password)
  var self     = this
  this.getOne({ $or: [{username: name}, {email: name}] }, function(error, user, instance) {
    if (error) return callback(error)
    if (!user) return callback("该用户未注册")
    if (user.password !== password) {
      return callback("密码错误")
    } else {
      instance.getProfile(callback)
    }
  })
}

Users.prototype.createPost = function () {}
Users.prototype.createComment = function () {}
Users.prototype.getProfile = function (callback) {
  var getProfile = function(user) {
    return {
      _id: user._id,
      username: user.username
    }
  }
  this.connector.performAction(getProfile, callback)
}
Users.prototype.updateProfile = function () {}

