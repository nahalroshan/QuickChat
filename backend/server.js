import express from 'express'
import dotenv from 'dotenv'

import authRoutes from '../backend/routes/auth.routes.js'
import connectToMongoDb from './db/connectToMongoDb.js';

dotenv.config();
const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`Port:${PORT}`);
})

app.use(express.json()); 
app.use('/api/auth',authRoutes)

