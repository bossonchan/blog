exports.home = function(req, res, next) {
  res.render("index", {});
};

exports.post = function(req, res, next) {
  res.render("post", {});
};

exports.about = function(req, res, next) {
  res.render("about", {});
};

exports.signin = function(req, res, next) {
  res.render("signin", {});
};

exports.error = function(req, res, next) {
  res.render("error", {});
};
