import JWT, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
    user: string | JwtPayload;
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