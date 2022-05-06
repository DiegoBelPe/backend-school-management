const {
  getAllMessage,
  getMessageByRemitente,
  deleteMessage,
  createMessage,
  updateMessage,

} = require('./message.service');
// Registrar mensaje
async function handlerCreateMessage(req, res) {
  const newMessage = req.body;


  try {
    const message = await createMessage(newMessage);
    res.status(201).json(message);

  }catch(error){
    // console.error(error);
    res.status(500).json({ messaje: `Error al crear el mensaje: ${error}` });
  }
}
// Mostrar todos los mensajes
async function handlerGetMessage(req, res) {
  const messages = await getAllMessage();
    res.status(201).json(messages);
}
// Mostrar mensaje del remitente
async function handlerGetMessageByRemitente(req, res) {
  const { remitente } = req.body;
  const messages = await getMessageByRemitente(remitente);

  if (!messages) {
    res.status(404).json({ messaje: `Mensaje no encontrato : ${remitente}` });
  } else {
    res.json(messages);
  }
}
// Borrar Mensajes
async function handlerDeleteMessage(req, res) {
  const { id } = req.params;

  try {
    const messages = await deleteMessage(id);
    res.json(messages);
  }catch{
    res.status(404).json({ messaje: `Error al borrar el mensaje: ${error}` });
  }
}

// Actualizar mensaje
async function handlerUpdateMessage(req, res) { // Patch actualizar un archivo

  console.log(req.params.id);
  const { id } = req.params;
  const { body } = req;

  const messages = await updateMessage(id, body);

  console.log(body);
  // if(!messages){
  //   res.status(404).json({messaje:`Task not found whith id: ${id}`})
  // }else{
  //   res.json({messaje:`Mensaje con el id ${id} actualizada`})
  // }

  res.json(messages);
}

module.exports = {
  handlerCreateMessage,
  handlerGetMessage,
  handlerGetMessageByRemitente,
  handlerDeleteMessage,
  handlerUpdateMessage,
};
