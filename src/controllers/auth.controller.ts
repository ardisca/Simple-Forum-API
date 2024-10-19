import { Request, Response } from "express";
import AuthServices from "../services/auth.services";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserServices from "../services/user.service";

const AuthController = {
  heandleLogin: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      // Validation Email & Password
      if (!email || !password) {
        res.status(400).json({
          message: "Email and Password must be valid",
        });
      }

      // Email Check
      const user = await User.findOne({ email });

      if (!user) {
        res.status(400).json({
          message: "Account not registered yet",
        });
      } else {
        //Password Check

        const isPasswordMatch = await bcrypt.compare(
          password,
          user?.password as string
        );

        if (isPasswordMatch) {
          const payload = {
            id: user.id,
            username: user.username,
            email: user.email,
          };
          const accessToken = jwt.sign(
            payload,
            process.env.JWT_ACCESS_SCREET as string,
            {
              expiresIn: 300,
            }
          );
          const refreshToken = jwt.sign(
            payload,
            process.env.JWT_REFRESH_SCREET as string,
            {
              expiresIn: "7d",
            }
          );
          await AuthServices.postToken(user.id, refreshToken);

          res
            .status(201)
            .cookie("accessToken", accessToken, { httpOnly: true })
            .cookie("refreshToken", refreshToken, { httpOnly: true })
            .json({ message: "Succsess Login", data: payload });
        } else {
          res.status(400).json({
            message: "Incorrect password",
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        message: "Error",
        error: error,
      });
      console.log(`ERROR${error}`);
    }
  },
  heandleRegistration: async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;

      const user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ message: "Email already exists" });
      } else {
        const hashPassword = await bcrypt.hash(password, 10);
        const data = await UserServices.postData(username, email, hashPassword);
        if (data) {
          res.status(201).json({ message: "Registration Succsess", data });
        } else {
          res.status(400).json({ message: "Registration Failed" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Error", error: error });
    }
  },
  heandleLogout: async (req: Request, res: Response) => {
    try {
      const { refreshToken } = req.cookies;
      await AuthServices.deleteToken(refreshToken);

      res
        .clearCookie("refreshToken")
        .clearCookie("accessToken")
        .json({ message: "Loqout Succsess" });
    } catch (error) {
      res.status(500).json({
        message: "Error",
        error: error,
      });
    }
  },
};

export default AuthController;
