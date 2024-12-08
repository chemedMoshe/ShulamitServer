import UserDB, { IUser } from "../Types/ModelsDB/UserModelDB";
import LoginDTO from "../Types/DTO/LoginDTO";
import mongoose ,{Types} from "mongoose";

export const findItemDB = async(user: LoginDTO) => {
    try {
        return await UserDB.findOne({ email: user.email }).lean();
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
};

export const addNewItemDB = async <T>(type: mongoose.Model<T>, user: T) => {
    try {
        return await type.create(user);
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
};

export const getAllItemsDB = async <T>(type: mongoose.Model<T>) => {
    try {
        return await type.find({}).lean();
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}

export const updateItemDB = async <T>(type: mongoose.Model<T>, _id:Types.ObjectId ,item: T) => {
    try {
          return await type.findOneAndUpdate({ _id }, item!,{new: true}).lean();
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}