import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: ".env",
});

const PORT = process.env.PORT || 8080;

connectDB()
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`Application is running on ${PORT}`);
    });
  })
  .catch((err) => console.log("db connection error", err));
