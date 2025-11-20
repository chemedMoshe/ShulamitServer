import { Router } from "express";
import { isLoginUser, loginUser, logoutUser, registerUser, updateUser } from "../Controllers/AuthController";

const router = Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/is-logged-user",isLoginUser)

router.put("/update/", updateUser);

router.post("/logout", logoutUser)

export default router;