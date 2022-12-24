import mongoose from "mongoose";

export default function ConfigureDatabase() {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to the database successfully!"))
    .catch((error) =>
      console.log("Error in connecting to the database", error)
    );
}
