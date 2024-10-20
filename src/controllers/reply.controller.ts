import type { Request, Response } from "express";
import ReplyServices from "../services/reply.services";

const ReplyController = {
  heandleGet: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      if (!id) {
        res.status(400).json({ message: "Id must be valid" });
      } else {
        const data = await ReplyServices.getData(id);
        if (!data) {
          res.status(400).json({ message: "Failed" });
        } else {
          res.status(200).json({ message: "Succsess Get Data", data });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleaAdd: async (req: Request, res: Response) => {
    try {
      const { content, threadId } = req.body;
      const id = res.locals.id;

      if (!content) {
        res.status(400).json({ message: "content must be valid" });
      } else {
        // console.log(`${content}, ${threadId}, ${id}`);
        const data = await ReplyServices.postData(content, threadId, id);
        if (!data) {
          res.status(400).json({ message: "Failed" });
        } else {
          res.status(200).json({ message: "Succsess Add Data", data });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleaUpdate: async (req: Request, res: Response) => {
    try {
      const { id, content } = req.body;
      const data = await ReplyServices.petchData(id, content);
      if (!data) {
        res.status(400).json({ message: "Failed" });
      } else {
        res.status(200).json({ message: "Succsess Update Data", data });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleaDelete: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;
      const data = await ReplyServices.deleteData(id);
      if (!data) {
        res.status(200).json({ message: "Succsess Delete Data", data });
      } else {
        res.status(400).json({ message: "Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
};

export default ReplyController;
