const homework = require("./api/homerWork");

function routes(app) {
  app.use("/api/tareas", homework);
}

module.exports = routes;