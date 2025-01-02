import { findItemDB, addNewItemDB } from "../DataLayer/AuthDBLayer";
import LoginDTO from "../Types/DTO/LoginDTO";
import { IUser } from "../Types/ModelsDB/UserModelDB";
import validator from 'validator';
import bcrypt from "bcrypt";
import userModelDB from "../Types/ModelsDB/UserModelDB";

export default class AuthServer {

    public static checkReq = (typeTest: "login" | "register", user: LoginDTO | IUser) => {
        const { email, password } = user as LoginDTO | IUser;

        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        if (typeTest === "register" && (!(user as IUser).name)) {
            throw new Error("Name is required");
        }
    };


    public static loginUser = async (user: LoginDTO) => {
        try {
            this.checkReq("login", user);

            const existUser = await findItemDB<IUser>(userModelDB,"email", user.email);
            if (!existUser) throw new Error("User not found");

            const isMatch = await bcrypt.compareSync(user.password, existUser.password);
            if (!isMatch) throw new Error("Incorrect password");

            const { _id, name, email } = existUser;
            return { _id, name, email };
        }
        catch (err) {
            throw (err as Error).message;
        }
    };

    public static registerUser = async (newUser: IUser) => {
        try {
            this.checkReq("register", newUser);
            if (!validator.isEmail(newUser.email)) throw new Error("Email is not valid");

            const password = bcrypt.hashSync(newUser.password, 10);
            newUser.password = password;

            const user = await addNewItemDB<IUser>(userModelDB, newUser);
            return { message: `${user.name} registered successfully`,...newUser };
        } catch (error) {
            throw (error as Error).message;
        }
    };

    public static updateUser = async (user: IUser) => {
        try {
            this.checkReq("register", user);
            if (!validator.isEmail(user.email)) throw new Error("Email is not valid");
            const userUpdated = await userModelDB.findOneAndUpdate({ _id: user._id }, user, { new: true });
            return userUpdated;
        } catch (error) {
            throw (error as Error).message;
        }
    };
}