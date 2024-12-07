import mongoose from "mongoose";
export interface IUser extends mongoose.Document {
    _id: string;
    name: string;
    email: string;
    password: string;
    questions: mongoose.Types.ObjectId[];
    responses: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
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
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Response' }],

});

export default mongoose.model<IUser>('User', userSchema);