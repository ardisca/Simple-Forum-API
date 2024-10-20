import express from "express";
import { verifyToken } from "../middlewares/token.middlewares";
import CategoryController from "../controllers/category.controller";

export const categoryRouter = express.Router();
categoryRouter.get("/category", verifyToken, CategoryController.heandleGetAll);
categoryRouter.post("/category", verifyToken, CategoryController.heandleAdd);
categoryRouter.delete(
  "/category",
  verifyToken,
  CategoryController.heandleDelete
);
