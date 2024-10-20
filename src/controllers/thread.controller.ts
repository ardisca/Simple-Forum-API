import type { Request, Response } from "express";
import ThreadServices from "../services/thread.services";

const ThreadController = {
  heandleGetAllData: async (req: Request, res: Response) => {
    try {
      const data = await ThreadServices.getAllData();
      if (!data) {
        res.status(200).json({ message: "Succsess Get Data", data });
      } else {
        res.status(400).json({ message: "Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleGetDataById: async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const data = await ThreadServices.getDataById(id);
      if (!data) {
        res.status(200).json({ message: "Succsess Get Data", data });
      } else {
        res.status(400).json({ message: "Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandlePostData: async (req: Request, res: Response) => {
    try {
      const { title, content, categoryId } = req.body;
      const { userId } = res.locals.id;
      if (!title || !content || !categoryId) {
        res.status(400).json({
          message: "Title, Content and Category must be valid",
        });
      } else {
        const data = await ThreadServices.postData(
          title,
          content,
          categoryId,
          userId
        );
        if (data) {
          res.status(201).json({
            message: "Succsess Add Data",
            data,
          });
        } else {
          res.status(400).json({
            message: "Failed Add Data",
          });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandlePatchData: async (req: Request, res: Response) => {
    try {
      const { id, title, content, categoryId } = req.body;

      const payloadData: Partial<{
        title: string;
        content: string;
        categoryId: string;
      }> = {};

      if (title) {
        payloadData.title = title;
      }
      if (content) {
        payloadData.content = content;
      }
      if (categoryId) {
        payloadData.categoryId = categoryId;
      }

      const data = await ThreadServices.patchData(id, payloadData);
      if (data) {
        res.status(200).json({
          message: "Succsess Update Data",
          data,
        });
      } else {
        res.status(400).json({
          message: "Failed Update Data",
        });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
};

export default ThreadController;
