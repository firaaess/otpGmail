import nodemailer from 'nodemailer'
import { Verification_Email_Template, Welcome_Email_Template } from './emailTemplate.js';
import { userModel } from '../models/user.js';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user:'raffipriyarosa@gmail.com',
      pass:'hzsb nvop jvxl nfvw',
    },
  });

export const sendVerificationCode = async(email, verificationCode) => {
    try {
        const info = await transporter.sendMail({
            from: '"firaaes 👻" <raffipriyarosa@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify your gmail", // Subject line
            text: "Verify your gmail", // plain text body
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode) // html body
          });
          console.log(info)
    } catch (error) {
        console.log(error)
    }
}
export const welcomeEmail = async(email, name) => {
    try {
        const info = await transporter.sendMail({
            from: '"firaaes 👻" <raffipriyarosa@gmail.com>', // sender address
            to: email, // list of receivers
            subject: `welcome ${name}`, // Subject line
            text: `welcome ${name}`, // plain text body
            html: Welcome_Email_Template.replace("{name}", name) // html body
          });
          console.log(info)
    } catch (error) {
        console.log(error)
    }
}
