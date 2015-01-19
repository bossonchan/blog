var cluster = require("cluster");
var cpus    = require("os").cpus().length;

if (process.env.NODE_ENV === "production") {
  if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
      cluster.fork();
    }

    cluster.on("exit", function (worker, code, signal) {
      console.log("Worker " + worker.process.pid + " died.");
    });

  } else {
    require("./server").start();
  }
} else {
  require("./server").start();
}
