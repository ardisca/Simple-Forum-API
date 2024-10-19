import type { Request, Response } from "express";
import UserServices from "../services/user.service";

const UserController = {
  heandle: async (req: Request, res: Response) => {
    res.send("HELLO");
  },
  heandleDetail: async (req: Request, res: Response) => {
    try {
      const { id } = req.body;

      const data = await UserServices.getDataById(id);
      if (data) {
        const dataUser = {
          id: data.id,
          username: data.username,
          email: data.email,
        };
        res.status(200).json({ message: "Succsess", data: dataUser });
      } else {
        res.status(400).json({ message: "Account not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
};

export default UserController;
