require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const configExpress = require("./config/express");
const connectDB = require("./config/database");
const routes=require("./routes")
const app = express();


configExpress(app);
connectDB();
routes(app)

app.use(express.json());
morgan.token("body", function (req, res) {
  console.log(req.body);
  return JSON.stringify(req.body);
});
app.use(morgan(":method :url :status :body - :response-time ms"));





const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
