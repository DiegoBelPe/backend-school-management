require("dotenv").config();
const express = require("express");
const { route } = require("express/lib/application");
const { json } = require("express/lib/response");
const morgan = require("morgan");

const mongoose = require("mongoose");
const configExpress=require('./config/express')
const connectDB= require('./config/database')

const app = express();

configExpress(app);

connectDB()

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

const tareas = [
  {
    id: 1,
    name: "sociales",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "29-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6424122",
  },
  {
    id: 5,
    name: "Emerson Asto",
    number: "40-232-578456",
  },
];
app.get("/api/tareas", (req, res) => {
  res.json(tareas);
});
const getCurrentDate = () => {
  const today = new Date();
  return today;
};
app.get("/info", (req, res) => {
  res.send(`<p> Phonebbok has info for ${tareas.length} people </p> \n 
            ${getCurrentDate()}`);
});
app.get("/api/tareas/:id", (req, res) => {
  const id = req.params.id;
  const person = tareas.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    res.status(404).json({ Message: "not found" });
  } else {
    res.json(person);
  }
});
app.delete("/api/tareas/:id", (req, res) => {
  const id = req.params.id;
  const person = tareas.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    res.status(404).json({ Message: "not found" });
  } else {
    res.json(person);
  }
});

//1.5: backend de la agenda telefónica
app.post("/api/tareas", (req, res) => {
  const id = Math.round(Math.random() * 10000);
  const nuevaPersona = { ...req.body, id };
  tareas.push(nuevaPersona);
  res.status(201).json({ Message: "Contacto agregado!" });
});

//1.6: backend de la agenda telefónica

app.post("/api/tareas", (req, res) => {
  const id = Math.round(Math.random() * 10000);
  const { name, number } = req.body;
  const repeatContact = tareas.find((person) => {
    return person.name === name;
  });
  if (repeatContact) {
    res.status(400).json({ Message: "Nombre repetido" });
  }

  console.log(repeatContact);
  if (name === undefined || name.length === 0) {
    res.status(400).json({ Message: "Nombre no valido" });
  } else if (number === undefined || number.length === 0) {
    res.status(400).json({ Message: "Numero no valido" });
  } else {
    const nuevaPersona = { ...req.body, id };
    tareas.push(nuevaPersona);
    res.status(201).json({ Message: "Contacto agregado!" });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
