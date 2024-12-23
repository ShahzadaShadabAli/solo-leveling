import express from "express"
import { getCharacter } from "../controllers/characterController.js"
import cookieAuth from "../middlewares/cookieAuth.js"

const router = express.Router()

router.get("/",getCharacter)

export default router