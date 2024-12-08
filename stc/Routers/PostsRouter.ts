import { Router } from "express";
import { getAllPosts, newPost, updatePost } from "../Controllers/PostsController";

const router = Router();

router.get("/all", getAllPosts);

router.post("/new", newPost);

router.put("/update/:id", updatePost);


export default router;