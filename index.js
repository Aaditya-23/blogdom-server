import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConfigureDatabase from "./config/mongoose.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50MB" }));
app.use(express.urlencoded({ extended: true }));

ConfigureDatabase();
app.use("/", routes);

app.listen(port, (error) => {
  if (error) {
    console.log("Error in starting the server");
    return;
  }

  console.log(`Server is running: http://localhost:${port}/`);
});
