import { Request, Response, NextFunction } from "express";
import { IUser } from "../Types/userModel";
import JWT from "jsonwebtoken";

export interface CustomRequest extends Request {
    user:string | JWT.JwtPayload | IUser
   }
const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;        
        if (!token) {
             res.status(401).json({ message: "Unauthorized" });
             return
        }
        const decoded = JWT.verify(token, process.env.JWT_SECRET as string);
        (req as CustomRequest).user = decoded;
        next();
    } catch (error) {
         res.status(401).json({ message: "Unauthorized" });
         return
    }
};

export default verifyUser;