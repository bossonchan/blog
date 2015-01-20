var mongooo  = require("mongooo");
var Messages = module.exports = mongooo.build("messages");

Messages.generate = function(rawData, callback) {
  this.create({
    type         : rawData.type || Messages.types.COMMENT,
    content      : rawData.content,
    postId       : rawData.postId,
    
    creator      : rawData.creator,
    createTime   : new Date(),

    repliesCount : 0,
    replyTo      : rawData.replyTo || ""
  }, function(error, instance, message) {
    callback(error, message);
  });
};

Messages.prototype.addReply = function() {};
