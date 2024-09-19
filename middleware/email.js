import { transporter } from "./emailConfig.js";
import { Verification_Email_Template, Welcome_Email_Template } from "./emailTemplate.js";

 export const sendVerificationCode = async(email, verificationCode) => {
    try {
    const response = await transporter.sendMail({
        from: '"firaaes👻" <raffipriyarosa@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Verify your email", // Subject line
        text: "Verify your email", // plain text body
        html: Verification_Email_Template.replace("{verificationCode}", verificationCode), // html body
    });
    console.log('kode berhasil di kirimkan', response)
 } catch (error) {
    console.log('email error')   
 }
    }


 export const welcomeEmail = async(email, name) => {
    try {
    const response = await transporter.sendMail({
        from: '"firaaes👻" <raffipriyarosa@gmail.com>', // sender address
        to: email, // list of receivers
        subject: `welcome ${name}`, // Subject line
        text:  `welcome ${name}`, // plain text body
        html: Welcome_Email_Template.replace("{name}", name), // html body
    });
    console.log('kode berhasil di kirimkan', response)
 } catch (error) {
    console.log('email error')   
 }
    }
