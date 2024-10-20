import express from "express";
import UserController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/token.middlewares";

export const accountRouter = express.Router();

accountRouter.get("/user/detail", verifyToken, UserController.heandleDetail);
accountRouter.patch("/user/detail", verifyToken, UserController.heandleUpdate);
accountRouter.patch(
  "/user/change-password",
  verifyToken,
  UserController.heandleUpdatePassword
);
