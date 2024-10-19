import express from "express";
import UserController from "../controllers/user.controller";
import { verifyToken } from "../middlewares/token.middlewares";

export const accountRouter = express.Router();

accountRouter.get("/detail", verifyToken, UserController.heandleDetail);
accountRouter.get("/", UserController.heandle);
// accountRouter.delete("/update", UserController.heandleUpdate);
// accountRouter.delete("/change-password", UserController.heandleChangePassword);
