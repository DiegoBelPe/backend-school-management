require ('dotenv').config();
const fs = require('fs');

const cloudinary = require('cloudinary').v2;

async function uploadImage (image) {
    try {
        const result = await cloudinary.uploader.upload(image);
        console.log("file: server.js: uploadImage: result: ", result);
    } catch (error) {
      console.log(error);
    }
}

uploadImage('./High school.png')
