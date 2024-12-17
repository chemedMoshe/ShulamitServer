import mongoose, { ObjectId } from "mongoose";

interface IPost extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    subject: string,
    header: string,
    content: string,
    endPost:string|null,
    likes: {id: mongoose.Types.ObjectId, name: string, email: string,amount: number}[]|[],
}
const postSchema = new mongoose.Schema<IPost>({
    subject: String,
    header: String,
    content: String,
    endPost: String,
    likes: {
        type: [{ id: mongoose.Schema.Types.ObjectId, name: String, email: String, amount: Number }],
        default: []
    },
});

export default mongoose.model<IPost>("Posts", postSchema);