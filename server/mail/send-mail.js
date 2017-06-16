const nodemailer = require('nodemailer');

const autoResponseTemplate = data => ({
  from: '"JA Werthman Music Lessons 🎸" <lessons@jawerthmannmusiclessons.com>', // sender address
  to: data.email.value, // list of receivers
  subject: 'Thanks for getting in touch!', // Subject line
  html: `<p>Hey ${data.name.value},<p>
    <p>Thanks for getting in touch! Just wanted to let you know I recieved your message, and I will get back to you soon.<p>
    <p>Cheers,<p>
    <p>John<p>` // html body
});

const newContactTemplate = data => ({
  from: '"JA Werthman Music Lessons 🎸" <lessons@jawerthmannmusiclessons.com>', // sender address
  to: 'john@jawerthmannmusiclessons.com', // list of receivers
  // to: 'gwestneat@gmail.com', // list of receivers
  subject: 'New Website Contact', // Subject line
  html: `<p>You got a new contact from your website:<p>
    <hr/>
    <p>
      <b>Name:</b><br>
      ${data.name.value}
    <p>
    <p>
      <b>Email:</b><br>
      ${data.email.value}
    <p>
    <p>
      <b>Message:</b><br>
      ${data.message.value}
    <p>` // html body
});

// let transporter = nodemailer.createTransport({
//   host: 'smtp.zoho.com',
//   port: 465,
//   secure: true, // upgrade later with STARTTLS
//   auth: {
//     user: 'lessons@jawerthmannmusiclessons.com',
//     pass: 'buttplug69'
//   }
// });

let transporter = nodemailer.createTransport({
  streamTransport: true
});

const sendMail = data => {
  console.log(data);
  // send mail with defined transport object
  transporter.sendMail(newContactTemplate(data), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });

  // send mail with defined transport object
  transporter.sendMail(autoResponseTemplate(data), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
};

module.exports = sendMail;
