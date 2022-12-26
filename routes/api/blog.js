import { Router } from "express";
import {
  FetchBlogs,
  PostBlog,
  PostComment,
  DeleteBlog,
  UpdateBlog,
  DeleteComment,
} from "../../controllers/blog.js";
import Authorization from "../../middlewares/Authorization.js";

const router = Router();

router.get("/fetch-blogs", FetchBlogs);
router.post("/post-blog", Authorization, PostBlog);
router.post("/post-comment", PostComment);
router.post("/delete-comment", Authorization, DeleteComment);
router.post("/delete-blog", Authorization, DeleteBlog);
router.post("/update-blog", Authorization, UpdateBlog);

export default router;
