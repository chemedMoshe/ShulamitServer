import { CustomRequest } from "../Middleware/verifyUser";
import GraphService from "../Server/GraphService";
import { Request, Response } from "express";
import { IUser } from "../Types/userModel";

export const getGraphByUserId =  async (req: Request, res: Response) => {
    try {
        const userId = (req as CustomRequest).user as string;
        const graph = await GraphService.getGraphByUserId(userId);
        res.status(200).json(graph);
    } catch (err) {
        res.status(400).json({ data: null, error: err });
    }
}

export const createDataGraph = async (req: Request, res: Response) => {
    try {
        const user = (req as CustomRequest).user as IUser;
        const graph = await GraphService.createGraph(req.body, String(user._id));
        res.status(201).json(graph);
    } catch (err) {
        res.status(400).json({ data: null, error: err });
    }
}