import express from 'express'
import dotenv from 'dotenv'
import { conn } from './libs/db.js'
import { register, verifyEmail } from './routes/auth.js'


dotenv.config()
conn()
const app = express()
const port = process.env.PORT
app.use(express.json());

app.post('/register', register)
app.post('/verifyEmail', verifyEmail)

app.listen(port, ()=> {
    console.log('server is running on port :', port)
})