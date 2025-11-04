import { Request, Response } from "express";
import PostServer from "../Server/PostServers";
import mongoose from "mongoose";



export const newPost = async (req: Request, res: Response) => {
    try {
        const dataFromServer = await PostServer.createPost(req.body);
        res.status(201).json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(400);
    }
};

export const getAllPosts = async (req: Request, res: Response) => {
    try {
        const dataFromServer = await PostServer.getAllPosts();
        res.json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(400);
    }
};


export const updatePost = async (req: Request, res: Response) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const dataFromServer = await PostServer.updatePost(id ,req.body);
        res.status(200).json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(400);
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const id = new mongoose.Types.ObjectId(req.params.id)
        const dataFromServer = await PostServer.deletePost(id);
        res.status(200).json(dataFromServer);
    }
    catch (err) {
        res.json({ data: null, error: err }).status(400);
    }
}