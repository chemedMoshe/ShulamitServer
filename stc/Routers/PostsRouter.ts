import { Router } from "express";
import { getAllPosts, newPost, updatePost } from "../Controllers/PostsController";
import verifyUser from "../Middleware/verifyUser";

const router = Router();

router.get("/all", verifyUser,getAllPosts);

router.post("/new", verifyUser, newPost);

router.put("/update/:id", verifyUser ,updatePost);


export default router;