import { Router } from "express";
import { deletePost, getAllPosts, newPost, updatePost } from "../Controllers/PostsController";
import verifyUser from "../Middleware/verifyUser"
import isAdminVerify from "../Middleware/verifyIsAdmin"

const router = Router();

router.get("/all", verifyUser,getAllPosts);

router.post("/", isAdminVerify, newPost);

router.put("/update/:id", isAdminVerify ,updatePost);

router.delete("/delete/:_id", isAdminVerify, deletePost);


export default router;