import mongoose, { Schema } from "mongoose";
import { IQuestion } from "../QuestionModel";

const questionSchema = new Schema<IQuestion>({
    userId: {type:mongoose.Types.ObjectId, ref: "User"},
    question: { type: { header: String, content: String }, required: true },
    answer: { type: String || null},
});



export default mongoose.model<IQuestion>('Question', questionSchema);