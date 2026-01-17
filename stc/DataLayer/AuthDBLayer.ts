import UserDB from "../Types/ModelsDB/UserModelDB";
import mongoose, { Types } from "mongoose";

export const findItemDB = async <T>(
  category: mongoose.Model<T>,
  key: string,
  value: any,
  populate: string | null = null
) => {
  try {
    return populate
      ? await category
          .findOne({ [key]: value } as any)
          .populate(populate)
          .lean()
      : await UserDB.findOne({ [key]: value }).lean();
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const findUserByEmail = async (email: string) => {
  try {
    return await UserDB.findOne({ email }).lean();
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const addNewItemDB = async <T>(type: mongoose.Model<T>, user: T) => {
  try {
    const ifExist = await type.findOne({ email: (user as any).email });
    if (ifExist) throw new Error("כתובת המייל כבר קיימת");
    return await type.create(user);
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const updateItemDB = async <T>(
  type: mongoose.Model<T>,
  _id: Types.ObjectId,
  item: T
) => {
  try {
    return await type.findOneAndUpdate({ _id }, item!, { new: true }).lean();
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const deleteItemDB = async <T>(
  type: mongoose.Model<T>,
  _id: Types.ObjectId
) => {
  try {
    const data = await type.findByIdAndDelete(_id);
    if (!data) throw ("Item not found");
    return { message: "Item deleted successfully", _id };
  } catch (err) {
    throw new Error((err as Error).message);
  }
};
