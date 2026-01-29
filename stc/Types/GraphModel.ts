import mongoose from "mongoose";

export interface IDataGraph extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.ObjectId;
  emotionScore: number;
  desireToStay_score: number;
  tensionLevel: number;
  entryOrder: number;
  entryTime: Date;
}


