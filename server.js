import express  from "express";
import dotenv from "dotenv"
import conn from "./libs/db.js";
import authRoutes from "./routes/authRouter.js";
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use('/auth', authRoutes)

conn()
app.listen(PORT, () => {
    console.log('server running', PORT)
})