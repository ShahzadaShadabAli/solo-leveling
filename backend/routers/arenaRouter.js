import express from "express"
import { getArena } from "../controllers/arenaController.js"

const router = express.Router()

router.get('/', getArena)

export default router;