import protectRoute from "../middleware/protectRoute.js";
import express from "express";
import { getMessage } from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);
router.get("/:id", protectRoute, getMessage);
export default router;
