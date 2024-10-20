import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import AuthServices from "../services/auth.services";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessToken, refreshToken } = req.cookies;

  if (!accessToken) {
    res.status(401).json({ message: "No access token provided" });
  }

  try {
    jwt.verify(accessToken, process.env.JWT_ACCESS_SCREET as string);
    const payload = jwt.decode(accessToken) as {
      id: string;
      username: string;
      email: string;
    };

    // req.body = {
    //   id: payload.id,
    // };

    res.locals.id = payload.id;

    next();
  } catch (error) {
    if (!refreshToken) {
      res.status(401).json({ message: "Re-Login" });
    }
    try {
      jwt.verify(refreshToken, process.env.JWT_REFRESH_SCREET as string);
      const actifeRefreshToken = await AuthServices.getToken(refreshToken);

      if (!actifeRefreshToken) {
        res.status(401).json({ message: "Re-Login" });
      }
      const payload = jwt.decode(refreshToken) as {
        id: string;
        username: string;
        email: string;
      };
      const payloadNewAccessToken = {
        id: payload.id,
        username: payload.username,
        email: payload.email,
      };
      const newAccessToken = jwt.sign(
        payloadNewAccessToken,
        process.env.JWT_ACCESS_SCREET as string,
        {
          expiresIn: 300,
        }
      );
      res.cookie("accessToken", newAccessToken, { httpOnly: true });
      res.locals.id = payload.id;

      next();
    } catch (error) {
      res.status(500).json({ message: "Error", error });
    }
  }
};
