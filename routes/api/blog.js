import { Router } from "express";
import { FetchBlogs } from "../../controllers/blog.js";

const router = Router();

router.get("/fetch-blogs", FetchBlogs);
// router.post('/post-blogs', )

export default router;
