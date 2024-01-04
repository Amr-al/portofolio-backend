"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.NodeMailerEmail,
        pass: process.env.NodeMailerPass,
    },
});
const sendMail = (sub, cont, from) => {
    let mailOptions = {
        from: from,
        to: "amrmohamed09@gmail.com",
        subject: sub,
        html: cont,
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    });
};
exports.sendMail = sendMail;
