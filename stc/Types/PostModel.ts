import mongoose from "mongoose";
export interface IPost extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    subject: string,
    header: string,
    content: string,
    endPost:string|null,
    likes: {id: mongoose.Types.ObjectId, name: string, email: string,amount: number}[]|[],
}