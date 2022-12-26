import { Router } from "express";
import blogs from "./blog.js";
import admin from "./admin.js";
import contact from "./contact.js";

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to blogdom's API" });
});

router.use("/blog", blogs);
router.use("/admin", admin);
router.use("/contact", contact);

export default router;
