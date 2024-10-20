import type { Request, Response } from "express";
import ReplyServices from "../services/reply.services";

const ReplyController = {
  heandleGet: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;

      const data = await ReplyServices.getData(id);
      if (!data) {
        res.status(200).json({ message: "Succsess Get Data", data });
      } else {
        res.status(400).json({ message: "Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleaAdd: async (req: Request, res: Response) => {
    try {
      const { conntent, threadId } = req.body;
      const { id } = res.locals.id;
      const data = await ReplyServices.postData(conntent, threadId, id);
      if (!data) {
        res.status(200).json({ message: "Succsess Add Data", data });
      } else {
        res.status(400).json({ message: "Failed" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleaUpdate: async (req: Request, res: Response) => {
    try {
      const { id, conntent } = req.body;
      const data = await ReplyServices.petchData(id, conntent);
      if (!data) {
        res.status(200).json({ message: "Succsess Update Data", data });
      } else {
        res.status(400).json({ message: "Failed" });
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
