import mongoose from "mongoose";
export interface IPost extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    idCreator: mongoose.Types.ObjectId
    header: string,
    content: string,
    responses: mongoose.Types.ObjectId[];
}