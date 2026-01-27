import { Request, Response } from "express";
import AuthServer from "../Server/AuthServer";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await AuthServer.loginUser(req.body);

    const token = jwt.sign(
      {
        _id: user._id!,
        name: user.name!,
        email: user.email!,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.json(user).status(200);
  } catch (error) {
    res.status(400).json({ data: null, Error: error });
  }
};

export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.json({ message: "user is logout" });
};

export const isLoginUser = (req: Request, res: Response) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    res.status(200).json(decoded);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = await AuthServer.registerUser(req.body);

    res.json(user).status(201);
  } catch (error) {
    res.json({ data: null, error }).status(404);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await AuthServer.updateUser(req.body);
    res.json(user).status(201);
  } catch (error) {
    res.json({ data: null, error }).status(404);
  }
};
