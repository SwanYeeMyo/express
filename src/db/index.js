import mongoose from "mongoose";

const DB_NAME = "standard_express";

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log("db connected successfully  . ", response.connection.host);
  } catch (error) {
    console.log(`DB connection error ${error}`);
    process.exit(1);
  }
};
