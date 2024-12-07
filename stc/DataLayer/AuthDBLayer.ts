import UserDB, { IUser } from "../Types/ModelsDB/UserModelDB";
import LoginDTO from "../Types/DTO/LoginDTO";

export const loginUSerDB = async (user: LoginDTO) => {
    try {
        return await UserDB.findOne({ email: user.email }).lean();
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
};

export const registerUserDB = async (user: IUser) => {
    try {        
        return await UserDB.create(user);
    }
    catch (err) {
        throw new Error((err as Error).message);
    }
}