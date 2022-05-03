const moongose = require('mongoose');

const MessageSchema = new moongose.Schema({
    remitente:{
        type: String,
        required: true,
        lowercase: true,
    },
    asunto:{
        type: String,
        lowercase: true,
    },
    mensaje:{
        type: String,
        lowercase: true,
    },
  },
);

module.exports = moongose.model('Message', MessageSchema);
