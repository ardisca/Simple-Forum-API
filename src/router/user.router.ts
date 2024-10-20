import express from "express";
import UserController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/token.middlewares";

export const accountRouter = express.Router();

accountRouter.get("/detail", verifyToken, UserController.heandleDetail);
accountRouter.patch("/detail", verifyToken, UserController.heandleUpdate);
accountRouter.patch(
  "/change-password",
  verifyToken,
  UserController.heandleUpdatePassword
);
