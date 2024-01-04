const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NodeMailerEmail,
    pass: process.env.NodeMailerPass,
  },
});

export const sendMail = (sub: string, cont: string, from: string) => {
  let mailOptions = {
    from: from,
    to: "amrmohamed09@gmail.com",
    subject: sub,
    html: cont,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

