var mongooo = require("mongooo");
var Posts   = module.exports = mongooo.build("posts");

function current() {
  var now = new Date();
  return {
    year   : now.getYear(),
    month  : now.getMonth() + 1,
    day    : now.getDay(),
    hour   : now.getHours(),
    minute : now.getMinutes(),
    second : now.getSeconds()
  };
}

Posts.generate = function(rawData, callback) {
  this.create({
    title            : rawData.title,
    content          : rawData.content,
    category         : rawData.category || "",

    creator          : rawData.creator,
    createTime       : current(),

    lastModifiedTime : current(),
    tags             : rawData.tags || [],
    commentsCount    : 0
  }, function (error, instance, post) {
    callback(error, post);
  });
};

Posts.prototype.addComment = function() {};
Posts.prototype.getComments = function() {};

