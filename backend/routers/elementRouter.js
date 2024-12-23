import e from "express";
import { getElement } from "../controllers/elementController.js";

const router = e.Router()

router.get('/', getElement)

export default router