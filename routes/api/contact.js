import { Router } from "express";
import { ContactUs } from "../../controllers/contact.js";

const router = Router();

router.post("/contactus", ContactUs);

export default router;
