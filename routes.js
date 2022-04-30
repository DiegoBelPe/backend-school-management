/**
 * Main application routes
 */
const healthcheck = require("./api/healthcheck");
const task = require("./api/task");
const user = require("./api/user");
const authLocal = require("./auth/local");
const homework = require("./api/homerWork");

const message = require("./api/message");
const student = require("./api/student");
const checkout = require("./api/checkout");

function routes(app) {
  // API Routes
  app.use("/api/healthcheck", healthcheck);
  app.use("/api/tasks", task);
  app.use("/api/users", user);
  app.use("/api/tareas", homework);
  app.use("/api/message", message);
  app.use("/api/student", student);

  app.use("/api/checkout", checkout);

  // auth Routes
  app.use("/login", authLocal);
  // app.use('/auth/facebook', facebookLocal);
  // app.use('/auth/google', googleLocal);
}

module.exports = routes;
