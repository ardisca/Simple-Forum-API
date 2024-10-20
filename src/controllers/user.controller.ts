import type { Request, Response } from "express";
import UserServices from "../services/user.service";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";

const UserController = {
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
  heandleUpdate: async (req: Request, res: Response) => {
    try {
      const { email, username } = req.body;
      const { userId } = res.locals.id;

      if (!email || !username) {
        res.status(400).json({ message: "Email & Username must be valid" });
      } else {
        const data = await UserServices.getDataById(userId);
        if (data) {
          const payloadData: Partial<{
            username: string;
            email: string;
          }> = {};
          if (username) {
            payloadData.username = username;
          }
          if (email) {
            payloadData.email = email;
          }
          const updateData = await UserServices.updateData(userId, payloadData);
          if (updateData) {
            res
              .status(201)
              .json({ message: "Succsess Update", data: payloadData });
          } else {
            res.status(400).json({ message: "Failed Update" });
          }
        } else {
          res.status(400).json({ message: "Account not found" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleUpdatePassword: async (req: Request, res: Response) => {
    try {
      const { id, oldPassword, newPassword } = req.body;

      if (!oldPassword || !newPassword) {
        res
          .status(400)
          .json({ message: "Old Password & New Password must be valid" });
      }

      const data = await UserServices.getDataById(id);
      if (data) {
        const isPasswordMatch = await bcrypt.compare(
          oldPassword,
          data.password as string
        );

        if (!isPasswordMatch) {
          res.status(400).json({ message: "Old Password Failed" });
        } else {
          const hashNewPassword = await bcrypt.hash(newPassword, 10);

          const payloadData: Partial<{
            password: string;
          }> = { password: hashNewPassword };

          const updateData = await UserServices.updateData(id, payloadData);
          if (!updateData) {
            res.status(400).json({ message: "Failed Update" });
          } else {
            res
              .status(201)
              .json({ message: "Succsess Update", data: payloadData });
          }
        }
      } else {
        res.status(400).json({ message: "Account not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
};

export default UserController;
