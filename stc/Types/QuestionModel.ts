import mongoose from "mongoose";

export interface IQuestion {
    _id: string;
    userId:mongoose.ObjectId;
    question: {
        header: string;
        content: string;
    };
    answer: string;
}