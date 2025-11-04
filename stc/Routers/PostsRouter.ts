import { Router } from "express";
import { deletePost, getAllPosts, newPost, updatePost } from "../Controllers/PostsController";
import verifyUser from "../Middleware/verifyUser";

const router = Router();

router.get("/all", verifyUser,getAllPosts);

router.post("/new", verifyUser, newPost);

router.put("/update/:id", verifyUser ,updatePost);

router.delete("/delete/:id", verifyUser, deletePost);


export default router;