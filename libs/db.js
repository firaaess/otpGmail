import mongoose  from "mongoose";

const conn = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('db connect')
    } catch (error) {
        console.log('db not connect', error)
        
    }
}

export default conn