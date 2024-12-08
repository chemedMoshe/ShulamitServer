import { Router } from "express";
import { loginUser, registerUser, updateUser } from "../Controllers/AuthController";

const router = Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.put("/update/", updateUser);

export default router;