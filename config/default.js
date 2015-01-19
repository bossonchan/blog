var config = module.exports = {};

config.server = {
  port : process.env.PORT || "8080"
};

// More information: https://github.com/expressjs/session
config.session = {
  name   : "BLOGSESSID",
  secret : "blog.secret.key",
  resave : false,
  saveUninitialized: false
};

