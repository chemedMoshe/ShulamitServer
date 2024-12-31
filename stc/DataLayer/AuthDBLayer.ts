import UserDB from "../Types/ModelsDB/UserModelDB";
import mongoose ,{Types} from "mongoose";

export const findItemDB = async<T>(category:mongoose.Model<T>,key:string,value:any,populate:string|null=null) => {
    try {
        return  populate? await category.findOne({ [key]: value }as any ).populate(populate).lean():
        await UserDB.findOne({[key]: value}).lean();
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