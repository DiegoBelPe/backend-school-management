const { status } = require("express/lib/response");
const {
  getAllMessage,
  getMessageByRemitente,
  deleteMessage,
  createMessage,
  updateMessage,

} = require ("./message.service");

//Registrar mensaje
async function handlerCreateMessage (req ,res){

    const newMessage = req.body;

    const message = await createMessage(newMessage);
    return res.status(201).json(message);
}
//Mostrar todos los mensajes
async function handlerGetMessage (req ,res){
    const messages = await getAllMessage();
    res.status(201).json(messages);
}
//Mostrar mensaje del remitente
async function handlerGetMessageByRemitente (req ,res){
    const { remitente }= req.body;
    const messages = await getMessageByRemitente(remitente);

    if(!messages){
      res.status(404).json({messaje:`Mensaje no encontrato : ${remitente}`})
  }else{
      res.json(messages);
  }

}
//Borrar Mensajes
async function handlerDeleteMessage (req ,res){
    const { id }= req.params;
    const messages = await deleteMessage(id);

    if(!messages){
      res.status(404).json({messaje:`Task not found whith id: ${id}`})
  }else{
      res.json(messages);
  }
}

//Actualizar mensaje
async function handlerUpdateMessage(req , res) {//Patch actualizar un archivo
  const {id} = req.params;
  const {body}= req;

  const messages = await  updateMessage( id , body );

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
    handlerUpdateMessage
}
