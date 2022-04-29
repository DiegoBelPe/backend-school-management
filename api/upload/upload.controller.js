const fs = require('fs');

const cloudinary = require('cloudinary').v2;

async function uploadImage (image) {
    try {
        const result = await cloudinary.uploader.upload(image);
        return result;
    } catch (error) {
      console.log(error);
    }finally{
      fs.unlinkSync(image);
    }
}

async function uploadSigleHandler (req,res) {
  try {
    const {file} = req;
    const result =await uploadImage(file.path);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  uploadSigleHandler,
};
