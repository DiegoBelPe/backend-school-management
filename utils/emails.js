const nodemailer = require("nodemailer");
const sgMail = require('@sendgrid/mail')

async function createGoogleTransporter(){

 // create reusable transporter object using the default SMTP transport
 const transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
   port: 465,
   secure: true, // true for 465, false for other ports
   auth: {
     user: process.env.USER, // generated ethereal user
     pass:  process.env.PASS, // generated ethereal password
   },
 });

 return transporter;

}

// async..await is not allowed in global scope, must use a wrapper
async function sendMailNodeMailer(data) {
  const transporter = await createGoogleTransporter();

  // send mail with defined transport object
  const info = await transporter.sendMail(data);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

function sendMailSendGrid(data) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  return sgMail.send(data);
}

module.exports = {
  sendMailNodeMailer,
  sendMailSendGrid,
};
