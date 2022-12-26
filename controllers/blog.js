import Blog from "../models/blog.js";

export const FetchBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    return res
      .status(200)
      .json({ message: "Blogs Fetched successfully!", blogs });
  } catch (error) {
    console.log("Error in fetching the blogs", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const PostBlog = async (req, res) => {
  try {
    const { body } = req.body;

    const blog = await Blog.create(req.body);

    return res.status(201).json({
      message: "Blog Posted Successfully!",
      blog,
    });
  } catch (error) {
    console.log("Error in posting the blog", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const PostComment = async (req, res) => {
  try {
    const { _id, author, body } = req.body;

    const blog = await Blog.findOne({ _id });

    if (!blog) return res.status(400).json({ message: "Invalid Request" });

    blog.comments.push({ author, body, date: new Date() });
    await blog.save();

    return res
      .status(201)
      .json({ message: "Comment Posted Successfully", blog });
  } catch (error) {
    console.log("Error in posting the comment", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const DeleteComment = async (req, res) => {
  try {
    const { commentId, blogId } = req.body;

    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) return res.status(400).json({ message: "Invalid Request" });

    blog.comments = blog.comments.filter((comment) => {
      return !comment._id.equals(commentId);
    });

    await blog.save();

    return res.status(201).json({ message: "Blog Deleted Successfully", blog });
  } catch (error) {
    console.log("Error in deleting the comment", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const DeleteBlog = async (req, res) => {
  try {
    const { _id } = req.body;

    await Blog.findOneAndDelete({ _id });

    return res.status(201).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.log("Error in deleting the blog", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const UpdateBlog = async (req, res) => {
  try {
    const { _id, title, body, readTime } = req.body;

    const blog = await Blog.findOne({ _id });

    if (!blog) return res.status(400).json({ message: "Invalid Request" });

    blog.title = title;
    blog.body = body;
    blog.readTime = readTime;

    await blog.save();

    return res.status(201).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    console.log("Error in updating the blog", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
