import mongoose from "mongoose";

export interface IPost extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    subject: string,
    header: string,
    content: string,
}