import express from "express";
import ReplyController from "../controllers/reply.controller";
import { verifyToken } from "../middlewares/token.middlewares";

export const replyRouter = express.Router();

replyRouter.get("/reply", verifyToken, ReplyController.heandleGet);
replyRouter.post("/reply", verifyToken, ReplyController.heandleaAdd);
replyRouter.patch("/reply", verifyToken, ReplyController.heandleaUpdate);
replyRouter.delete("/reply", verifyToken, ReplyController.heandleaDelete);
