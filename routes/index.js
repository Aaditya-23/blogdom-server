import { Router } from "express";
import api from "./api/index.js";

const router = Router();

router.get("/", (req, res) => {
  return res.send(
    "<h1 style='font-family: monospace'>Welcome to blogdom's server</h1>"
  );
});

router.use("/api", api);

export default router;
