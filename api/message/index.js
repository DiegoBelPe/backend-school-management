const { Router } = require('express');
const {
  handlerCreateMessage,
  handlerGetMessage,
  handlerGetMessageByRemitente,
  handlerDeleteMessage,
  handlerUpdateMessage,
} = require('./message.controller');

const router = Router();
router.post('/', handlerCreateMessage);// Registrar un mensaje
router.get('/by-remitente', handlerGetMessageByRemitente);// Listar mensaje por usuario
router.get('/', handlerGetMessage);// Listar todos los mensajes
router.delete('/:id', handlerDeleteMessage);// Elimnar mensaje
router.patch('/:id', handlerUpdateMessage);// Actuliizar mensaje
module.exports = router;
