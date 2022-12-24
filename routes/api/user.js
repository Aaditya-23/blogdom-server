import { Router } from "express";
import { CreateSession } from "../../controllers/user.js";
const router = Router();

router.get("/create-session", CreateSession);

export default router;
