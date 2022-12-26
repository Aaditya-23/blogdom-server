import { Router } from "express";
import { Login, Verify } from "../../controllers/admin.js";
import Authorization from "../../middlewares/Authorization.js";
const router = Router();

router.post("/login", Login);
router.post("/verify", Authorization, Verify);

export default router;
