import { Request, Response } from "express";
import AuthServer from "../Server/AuthServer";
import jwt from "jsonwebtoken";

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await AuthServer.loginUser(req.body);
       
        const token = jwt.sign({
            _id: user._id!,
            name: user.name!,
            email: user.email!
           },
          process.env.JWT_SECRET as string,
          { expiresIn: "1d" }
       );
        res.cookie("token", token);
        res.json(user).status(200);
    } catch (error) {
       res.status(400).json({data:null, Error:error});
    }
};

export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await AuthServer.registerUser(req.body);
        
        res.json(user).status(201);
    } catch (error) {
        res.json({data:null, error}).status(404);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await AuthServer.updateUser(req.body);
        res.json(user).status(201);
    } catch (error) {
        res.json({data:null, error}).status(404);
    }
};