import { model, Schema } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      lowercase: true,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Admin = model("Admin", adminSchema);
export default Admin;
