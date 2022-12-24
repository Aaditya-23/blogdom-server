import { Router } from "express";
import blogs from "./blog.js";
import user from "./user.js"

const router = Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Welcome to blogdom's API" });
});

router.use("/blog", blogs);
router.use("/user", user);

export default router;
