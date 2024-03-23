import express from 'express'
import protectRoute from '../middleware/protectRoute.js'
import { getUsersFunction } from '../controllers/user.controller.js'
const router = express.Router()

router.get("/",protectRoute, getUsersFunction)

export default router