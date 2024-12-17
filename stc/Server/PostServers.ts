import { addNewItemDB, getAllItemsDB, updateItemDB } from "../DataLayer/AuthDBLayer";
import { IPost } from "../Types/PostModel";
import PostDBModel from "../Types/ModelsDB/PostDBModel";
import mongoose from "mongoose";

export default class PostServer {
private static checkPost = (post: IPost) => {
    if (!post.subject || !post.header || !post.content) {
        throw new Error("All fields must be filled");
    }
}

    public static createPost = async (post: IPost) => {
        try {
            this.checkPost(post);
            return await addNewItemDB<IPost>(PostDBModel,post);
        }
        catch (err) {
            throw (err as Error).message;
        }
    };


    public static getAllPosts = async () => {
        try {
            return await getAllItemsDB<IPost>(PostDBModel);
        }
        catch (err) {
            throw (err as Error).message;
        }
    };


    public static updatePost = async (id:mongoose.Types.ObjectId,post: IPost) => {
        try {
           this.checkPost(post);
            return await updateItemDB<IPost>(PostDBModel,id,post);
        }
        catch (err) {
            throw (err as Error).message;
        }
    };
}