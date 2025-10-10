import express from "express";
import cors from "cors";

const app = express();

//only only from this origin
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
//to limit
app.use(
  express.json({
    limit: "16kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//for images
app.use(express.static("public"));

export { app };
