import { Router } from "express";
import { loginUser, logoutUser, registerUser, updateUser } from "../Controllers/AuthController";

const router = Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.put("/update/", updateUser);

router.post("/logout", logoutUser)

export default router;