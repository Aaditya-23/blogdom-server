import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const isValid = (arg) => arg !== null && arg !== undefined;

    if (!isValid(name) || !isValid(email) || !isValid(password))
      return res.status(400).json({ message: "Invalid Request" });

    const admin = await Admin.findOne({ email }).lean();

    if (admin)
      return res.status(400).json({ message: "Admin exists already!" });

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newAdmin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "Admin Created Successfully!", admin: newAdmin });
  } catch (error) {
    console.log("Error in Signing up the admin", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValid = (arg) => arg !== null && arg !== undefined;

    if (!isValid(email) || !isValid(password))
      return res.status(400).json({ message: "Invalid Request" });

    const admin = await Admin.findOne({ email }).lean();
    const validatePassword = () => bcrypt.compare(password, admin.password);

    if (!admin || !(await validatePassword()))
      return res
        .status(400)
        .json({ message: "Email/Password does not match", inValidCred: true });

    const payload = {
      _id: admin._id,
      email: admin.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(201).json({
      message: "Login successfull",
      admin: {
        _id: admin._id,
        email: admin.email,
      },
      token,
    });
  } catch (error) {
    console.log("Error in creating logging in the admin", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};

export const Verify = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ message: "Admin Verified Successfully", isVerified: true });
  } catch (error) {
    console.log("Error in verifying the admin", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
