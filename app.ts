import exp from "express";
import "dotenv/config";
import cors from "cors";
import authRouter from "./stc/Routers/AuthRouter";
import { connectDB } from "./stc/config/connectDB";
import cookieParser from "cookie-parser";
import postRouter from "./stc/Routers/PostsRouter";
import { graphRouter } from "./stc/Routers/GraphRouter";

const PORT = process.env.PORT || 3000;

const app = exp();

connectDB();

app.use(cors({ origin: ["http://localhost:5173","https://shulamitbar.netlify.app"],credentials: true}))

app.use(cookieParser());

app.use(exp.json());

app.use('/auth', authRouter);

app.use("/post",postRouter);

app.use("/graph",graphRouter);


app.listen(PORT, 
    () => console.log(`Server is running on port ${PORT}`));