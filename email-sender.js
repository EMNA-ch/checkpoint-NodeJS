var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  host: "127.0.0.1",
  port: 3000,
  secure: true,
  auth: {
    user: "---@gmail.com",
    pass: "---",
  },
});

var mailOptions = {
  from: "cheibi.emna90@gmail.com",
  to: "makni.ahmed@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
