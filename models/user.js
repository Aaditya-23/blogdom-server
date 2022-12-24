import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
    },

    email: {
      type: String,
      lowercase: true,
      required: true,
    },

    likedBlogs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Blog",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
