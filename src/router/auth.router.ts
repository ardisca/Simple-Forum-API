import express from "express";
import AuthController from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/login", AuthController.heandleLogin);
authRouter.post("/registration", AuthController.heandleRegistration);
authRouter.delete("/logout", AuthController.heandleLogout);
