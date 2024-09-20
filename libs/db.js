import mongoose from "mongoose";

export const conn = async() => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('database is connected')
    } catch (error) {
        console.log('database is not connected', error)
    }
}