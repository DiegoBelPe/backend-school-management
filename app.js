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

const url = process.env.MONGO_DB_URI;
/* mongoose.connect(url);
const TaskSchema = new mongoose.Schema({
  course: String,
  description: String,
  observations: String,
  endDate: String,
});
const Task = mongoose.model("Task", TaskSchema);
const task = new Task({
  course: "Programacion",
  description: "react-mongo",
  observations: "enviar info",
  endDate: "22 / 03 / 2022",
});

task.save()
  .then(result=>{
    console.log('nota guardada', result);

  })
  .catch() */

app.use(express.json());
morgan.token("body", function (req, res) {
  console.log(req.body);
  return JSON.stringify(req.body);
});

app.use(morgan(":method :url :status :body - :response-time ms"));
/* const port = 3001; */
routes(app)



const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
