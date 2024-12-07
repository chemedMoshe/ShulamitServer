import { Router } from "express";
import { loginUser, registerUser } from "../Controllers/AuthController";

const router = Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

export default router;