import mongoose, { ObjectId } from "mongoose";

interface IPost extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    idCreator: mongoose.Types.ObjectId,
    header: string,
    content: string,
    responses: mongoose.Types.ObjectId[];
}
const postSchema = new mongoose.Schema<IPost>({
    header: String,
    content: String,
    idCreator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    responses: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }],
        default: []
    },
});

export default mongoose.model<IPost>("Posts", postSchema);