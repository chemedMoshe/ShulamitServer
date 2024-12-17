import mongoose from "mongoose";
export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    questions: mongoose.Types.ObjectId[];
    isAdmin: boolean;
    createdAt: Date;
    
}