import e from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getCharacter, getCharNum } from "../controllers/userCharacterController.js";
import cookieAuth from "../middlewares/cookieAuth.js";

const router = e.Router()

router.get('/', cookieAuth, getCharacter)
router.get("/getCount", cookieAuth, getCharNum)

export default router;