import { NextFunction, Request, Response } from "express";
import JWT, { JwtPayload } from "jsonwebtoken";
import { CustomRequest } from "./verifyUser";



const verifyIsAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;        
        if (!token) {
             res.status(401).json({ message: "Unauthorized" });
             return
        }
        const decoded: any = JWT.verify(token, process.env.JWT_SECRET as string);
        if (!decoded?.isAdmin) {
            res.status(401).json({ message: "Unauthorized" });
            return 
        }
        (req as CustomRequest).user = decoded;
        next();
    } catch (error) {
         res.status(401).json({ message: "Unauthorized" });
         return
    }
};

export default verifyIsAdmin;