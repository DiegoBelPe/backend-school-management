const messageModel = require("./message.model");

function getAllMessage() {
    return messageModel.find();
}

async function getMessageByRemitente (remitente){
    const messages = await messageModel.find({remitente});

    if(!messages){
        return null;
    }
    return messages;
};

async function deleteMessage(id){
    const message = await messageModel.findByIdAndDelete(id);

    if(!message){
        return null;
    }
    return message;
}

async function createMessage(message){

    const savedMessage = await new messageModel(message);
    console.log(savedMessage);
    return savedMessage.save();
}

async function updateMessage(id, message){

  const updateMessage = await messageModel.findByIdAndUpdate(id, message);

  return updateMessage;
}



module.exports = {
    getAllMessage,
    getMessageByRemitente,
    deleteMessage,
    createMessage,
    updateMessage,
}
