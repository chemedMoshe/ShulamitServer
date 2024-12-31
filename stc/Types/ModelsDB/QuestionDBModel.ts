import mongoose, { Schema } from "mongoose";
import { IQuestion } from "../QuestionModel";

const questionSchema = new Schema<IQuestion>({
    question: { type: { header: String, content: String }, required: true },
    answer: { type: String, required: true },
});



export default mongoose.model<IQuestion>('Question', questionSchema);