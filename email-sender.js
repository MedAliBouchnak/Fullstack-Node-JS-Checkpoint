var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'dalybouchnak147@gmail.com',
//     pass: ''
//   }
// });

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      user: "dalybouchnak147@gmail.com",
      serviceClient: "217482835200-qjv77hv4fkd9ade7fcfci3tu5md55mp0.apps.googleusercontent.com",
      privateKey: "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",
    },
  });

var mailOptions = {
  from: 'dalybouchnak147@gmail.com',
  to: 'dalybouchnak@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});