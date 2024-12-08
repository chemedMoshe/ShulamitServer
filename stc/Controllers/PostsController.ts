import { Request, Response } from "express";
import PostServer from "../Server/PostServers";
import { IPost } from "../Types/PostModel";
import { IUser } from "../Types/userModel";
import mongoose, { ObjectId} from "mongoose";

interface CustomRequest extends Request {
    user:  IUser
}

export const newPost = async (req: Request, res: Response) => {
    try {
        const post = req.body as IPost;
        post.idCreator = (req as CustomRequest).user._id;
        const dataFromServer = await PostServer.createPost(req.body);
        res.json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(404);
    }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const dataFromServer = await PostServer.getAllPosts();
        res.json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(404);
    }
};


export const updatePost = async (req: Request, res: Response) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const dataFromServer = await PostServer.updatePost(id ,req.body);
        res.json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(404);
    }
};