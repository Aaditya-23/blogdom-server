import admin from "../config/serviceAccount.js";

export const CreateSession = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const value = await admin.auth().verifyIdToken(token);
    console.log(value);
  } catch (error) {
    console.log("Error in creating the user", error);
    return res.status(500).json({ message: "Internal Server Error!" });
  }
};
