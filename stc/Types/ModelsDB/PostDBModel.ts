import mongoose, { ObjectId } from "mongoose";
import { IPost } from "../PostModel";


const postSchema = new mongoose.Schema<IPost>({
    subject: String,
    header: String,
    content: String,
});

export default mongoose.model<IPost>("Posts", postSchema);