import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`DB connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Error in DB connection ", error);
    process.exit(1);
  }
};
export default connectDB;

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Something went wrong in DB connection ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT : ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error in DB connection ", error);
  }
})();
*/
