import mongoose, { Schema } from "mongoose";
import { IQuestion } from "../QuestionModel";
import { IDataGraph } from "../GraphModel";

const graphSchema = new Schema<IDataGraph>({
    userId: {type: mongoose.Types.ObjectId, required: true,ref: "User"},
    emotionScore: {type: Number, default: 0},
    desireToStay_score: {type: Number, default: 0},
    tensionLevel: {type: Number, default: 0},
    entryOrder: {type: Number, default: 0}, 
    entryTime: Date
});

graphSchema.index({ userId: 1 });

export default mongoose.model<IDataGraph>('Graph', graphSchema);