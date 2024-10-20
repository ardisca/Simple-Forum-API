import type { Request, Response } from "express";
import CategoryServices from "../services/category.service";

const CategoryController = {
  heandleGetAll: async (req: Request, res: Response) => {
    try {
      const data = await CategoryServices.getData();
      if (!data) {
        res.status(400).json({ message: "Failed Get Data Category" });
      } else {
        res.status(200).json({ message: "Succsess", data });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleAdd: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if (!name) {
        res.status(400).json({ message: "Name Category must be valid" });
      } else {
        const data = await CategoryServices.postData(name);
        if (!data) {
          res.status(400).json({ message: "Failed Add Data Category" });
        } else {
          res.status(201).json({ message: "Succsess Add Data Category" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleDelete: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      if (!id) {
        res.status(400).json({ message: "Id Category must be valid" });
      } else {
        const data = await CategoryServices.deleteData(id);
        if (!data) {
          res.status(400).json({ message: "Failed Delete" });
        } else {
          res.status(200).json({ message: "Succsess Delete" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
};

export default CategoryController;
