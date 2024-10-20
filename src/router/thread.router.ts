import express from "express";
import ThreadController from "../controllers/thread.controller";
import { verifyToken } from "../middlewares/token.middlewares";

export const threadRouter = express.Router();

threadRouter.get("/thread", verifyToken, ThreadController.heandleGetAllData);
threadRouter.get(
  "/thread/:id",
  verifyToken,
  ThreadController.heandleGetDataById
);
threadRouter.post("/thread", verifyToken, ThreadController.heandlePostData);
threadRouter.patch("/thread", verifyToken, ThreadController.heandlePatchData);
threadRouter.delete(
  "/thread",
  verifyToken,
  ThreadController.heandleGetDataById
);
