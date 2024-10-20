import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { authRouter } from "./router/auth.router";
import { accountRouter } from "./router/user.router";
import cookieParser from "cookie-parser";
import { categoryRouter } from "./router/category.router";
import { threadRouter } from "./router/thread.router";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected Succses"))
  .catch(() => console.log("Connected Failed"));

const app = express();

app.use(express.json());
app.use(cookieParser());

const apiVersion: string = `/api/${process.env.VERSION}`;

// ### Router
app.use(apiVersion, authRouter);
app.use(apiVersion, accountRouter);
app.use(apiVersion, categoryRouter);
app.use(apiVersion, threadRouter);
// Category
// Thread
// Reply

app.listen(process.env.PORT, () => {
  console.log(`Connect Port ${process.env.PORT}`);
});
