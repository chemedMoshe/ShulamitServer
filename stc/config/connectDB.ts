import mongoose from "mongoose";

export const connectDB = async () => {
  const URI = process.env.MONGO_URI as string;
  try {
    await mongoose.connect(URI);
    console.log(`Connected to MongoDB at ${URI}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
