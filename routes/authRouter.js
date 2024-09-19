import express from 'express'
import { register, verifyEmail } from './auth.js'

const authRoutes = express.Router()

authRoutes.post('/register', register)
authRoutes.post('/verifyEmail', verifyEmail)
export default authRoutes