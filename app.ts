import exp from "express";
import "dotenv/config";
import authRouter from "./stc/Routers/AuthRouter";
import { connectDB } from "./stc/config/connectDB";
import  verifyUser from "./stc/Middleware/verifyUser";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 3000;

const app = exp();
connectDB();

app.use(cookieParser());

app.use(exp.json());

app.use('/auth', authRouter);


app.listen(PORT, 
    () => console.log(`Server is running on port ${PORT}`));