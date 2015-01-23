exports.home = function(req, res, next) {
  res.render("index", {
    page           : "home",
    postsCount     : 30,
    pagesCount     : 5,
    pageNumber     : 1,
    nextPage       : 2,
    prevPage       : 0,
    posts          : [{
      title : "如何写好Nodejs系列（一）：模块化",
      content: "模块化思想是一个在软件工程上被认可的方法论，分而治之是我们解决复杂性的唯一方式。同样，当我们在编写一个nodejs程序时，我们也要遵循同样的规则来编写",
      pictures: ["http://img1.imgtn.bdimg.com/it/u=672733863,929272546&fm=21&gp=0.jpg"],
      url : "/post"
    }],
    latestComments : [],
    tags           : ["PHP", "Nodejs", "Javascript", "设计", "生活", "前端", "吉他", "羽毛球"],
    archives       : [2013, 2014, 2015]
  });
};

exports.post = function(req, res, next) {
  res.render("post", {
    page: "post",
    post: {
      title: "如何写好Nodejs系列（一）：模块化",
      createTime: "2015-01-22",
      creator   : {
        username: "Bosson"
      },
      readCount: 200,
      commentsCount: 20,
      content: "<p>这里应该是文章内容</p><p>这里应该是文章内容</p><p>这里应该是文章内容</p><p>这里应该是文章内容</p><p>这里应该是文章内容</p><p>这里应该是文章内容</p><p>这里应该是文章内容</p><p>这里应该是文章内容</p>",
      tags: ["Nodejs", "模块化"]
    },
    relative: [],
    lastUpdated: [],
    prevPost: {
      title: "Nodejs简介",
      url  : "/post"
    },
    nextPost: {
      title: "如何写好Nodejs系列（二）：深入理解异步IO",
      url  : "/post"
    }
  });
};

exports.about = function(req, res, next) {
  res.render("about", {
    page : "about"
  });
};

exports.signin = function(req, res, next) {
  res.render("signin", {
    page         : "signin",
    loginUrl     : "/signin",
    errorMessage : ""
  });
};

exports.error = function(req, res, next) {
  res.render("error", {
    page : "error"
  });
};
