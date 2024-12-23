import e from "express";
import { getType } from "../controllers/typeController.js";

const router = e.Router()

router.get("/", getType)

export default router