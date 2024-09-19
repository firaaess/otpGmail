import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        requred:true,
        unique:true
    },
     name:{
        type:String,
        requred:true,
    },
    password:{
        type:String,
        requred:true,
    },
    isVerifed:{
        type:Boolean,
        default:false
    },
    verificationCode:String
},{timestamps:true})

export const userModel = mongoose.model('user', userSchema)