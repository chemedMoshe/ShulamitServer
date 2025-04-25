import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    questions: mongoose.Types.ObjectId[];
    isAdmin: boolean;
    createdAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
    name: { 
        type: String,
         required: [true, 'Name is required']
         },
    email: { 
        type: String,
         required:[true, 'Email is required'],
          unique: true
         },
    password: { 
        type: String,
         required: [true, 'Password is required'],
         minlength: [6, 'Password must be at least 6 characters long']
         },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question', default: []}],
    isAdmin: { type: Boolean, default: false },
});

export default mongoose.model<IUser>('User', userSchema);