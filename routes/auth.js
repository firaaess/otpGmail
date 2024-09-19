import { sendVerificationCode, welcomeEmail } from "../middleware/email.js"
import { userModel } from "../models/user.js"
import bcryptjs from 'bcryptjs'

const register = async(req, res) => {
    try {
        const {email, password, name} = req.body
        if(!email|| !password || !name) {
        return res.status(400).json({success:false, message:'semua kolom wajib teris'})
    }
    const existUser = await userModel.findOne({email})
    if(existUser){
        return res.status(400).json({success:false, message:'email sudah terdaftar'})
    }
    const hashPassword = await bcryptjs.hashSync(password, 10)
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
    const user = new userModel({
        email,
        password: hashPassword,
        name,
        verificationCode
    })
    await user.save()
    sendVerificationCode(user.email, verificationCode)
    return res.status(200).json({success:false, message:'email berhasil terdaftar', user})
    
} catch (error) {
    console.log(error)
    return res.status(400).json({success:false, message:'internal server error'})
    }
}

const verifyEmail = async(req, res) => {
    try {
        const {code} = req.body
        const user = await userModel.findOne({
            verificationCode: code
        })
        if (!user){
            return res.status(400).json({success: false, message: 'invalid or expired code'})
        }
        user.isVerifed= true,
        user.verificationCode= undefined,
        await user.save()
        await welcomeEmail(user.email, user.name)
        return res.status(200).json({success: true, message: 'email berhasil di tambahkan'})
    } catch (error) {
        console.log(error)
        return res.status(400).json({success: false, message: 'internal server error'})
    }
}
export {register, verifyEmail}