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
    }
},
// {
//     timestamps: true,
//     versionKey:false,
// }
);

module.exports = moongose.model('Message', MessageSchema);
