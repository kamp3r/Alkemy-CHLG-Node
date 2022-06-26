const nodemailer = require("nodemailer");
const {config} = require('../config/config');

const sendMail = async (email)=> {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: config.mail,
      pass: config.mailPass,
    },
  });
  await transporter.sendMail({
    from: '"DisneyAPI" <disneyApi@example.com>',
    to: `${email}`,
    subject: 'Welcome to Disney API',
    text: 'Welcome to Disney API',
    html: '<b>Welcome to Disney API</b>',
  });
}

module.exports= sendMail;
