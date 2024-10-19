import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./router/auth.router";
import { accountRouter } from "./router/user.router";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected Succses"))
  .catch(() => console.log("Connected Failed"));

const app = express();

app.use(express.json());
app.use(cookieParser());

// ### Router
app.use("/", authRouter);
app.use("/user", accountRouter);
// Thread
// Reply

app.listen(process.env.PORT, () => {
  console.log(`Connect Port ${process.env.PORT}`);
});
