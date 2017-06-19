const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@gwst.io',
    pass: '028881d0099a543e8fe5b109ebd3af34'
  }
});

const template = data => {
  return {
    from: 'gregbot@gwst.io',
    to: data.email,
    subject: 'Thanks for Getting in Touch!',
    html: `<p>Hey ${data.name},</p>
    <p>Just wanted to let you know that I recieved your email and will get back to you soon.</p>
    <p>Thanks!</p>
    <p>Greg</p>
    `
  };
};

const sendMail = data => {
  transporter.sendMail(template(data), (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
};

module.exports = sendMail;
