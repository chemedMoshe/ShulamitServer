import mongoose from "mongoose";
import { INewPostDTO } from "../Types/DTO/Post/NewPostDTO";
import PostDBModel from "../Types/ModelsDB/PostDBModel";

export const getAllItemsDB = async <T>(type: mongoose.Model<T>) => {
    try {
        return await type.find({}).lean();
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}



export const addNewItemDB = async ( post:INewPostDTO) => {
    try {
        const newItem = new PostDBModel(post);
        await newItem.save();
        return newItem;
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
};