import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from '../backend/routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';
import messageRoutes from "../backend/routes/message.routes.js"
import userRoutes from "../backend/routes/user.routes.js"
dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Port:${PORT}`);
})

app.use(cors());

app.use(express.json()); 
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/users',userRoutes)

