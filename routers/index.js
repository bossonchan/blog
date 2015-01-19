var views = require("../controllers/views");

module.exports = function(app) {
  app.get("/", views.home);
  app.get("/home", views.home);
  app.get("/about", views.about);
  app.get("/post", views.post);
  app.get("/signin", views.signin);
};
