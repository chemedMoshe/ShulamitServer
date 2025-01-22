import exp from "express";
import "dotenv/config";
import cors from "cors";
import authRouter from "./stc/Routers/AuthRouter";
import { connectDB } from "./stc/config/connectDB";
import cookieParser from "cookie-parser";
import postRouter from "./stc/Routers/PostsRouter";
import PostServer from "./stc/Server/PostServers";

const PORT = process.env.PORT || 3000;

const app = exp();

connectDB();

app.use(cors())

app.use(cookieParser());

app.use(exp.json());

app.use('/auth', authRouter);

app.use("/post",postRouter);


app.listen(PORT, 
    () => console.log(`Server is running on port ${PORT}`));