const { Router } = require("express");

const {
  handlerCreateMessage,
  handlerGetMessage,
  handlerGetMessageByRemitente,
  handlerDeleteMessage,
  handlerUpdateMessage, 
} = require("./message.controller");

const router = Router();

//API
// Registrar un mensaje
router.post("/", handlerCreateMessage);
//Listar mensaje por usuario
router.get("/by-remitente", handlerGetMessageByRemitente);
//Listar todos los mensajes
router.get("/", handlerGetMessage);
//Elimnar mensaje
router.delete("/:id", handlerDeleteMessage);
//Actuliizar mensaje
router.patch("/:id", handlerUpdateMessage);

module.exports = router;
