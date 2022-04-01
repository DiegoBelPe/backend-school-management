/**
 * Main application routes
 */
const healthcheck = require("./api/healthcheck");
const task = require("./api/task");
const user = require("./api/user");
const authLocal = require("./auth/local");
const homework = require("./api/homerWork");

function routes(app) {
  // API Routes
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/tasks", task);
  app.use("/api/users", user);
  app.use("/api/tareas", homework);

  // auth Routes
  app.use("/auth/local", authLocal);
  // app.use('/auth/facebook', facebookLocal);
  // app.use('/auth/google', googleLocal);
}

module.exports = routes;
