import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    body: {
      type: String,
      required: true,
    },

    readTime: {
      type: Number,
      required: true,
    },

    comments: [
      new Schema(
        {
          body: {
            type: String,
            required: true,
          },

          author: {
            type: String,
            required: true,
          },
        },
        {
          timestamps: true,
        }
      ),
    ],
  },
  {
    timestamps: true,
  }
);

const Blog = model("Blog", blogSchema);
export default Blog;
