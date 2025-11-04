import { deleteItemDB, updateItemDB } from "../DataLayer/AuthDBLayer";
import { addNewItemDB, getAllItemsDB } from "../DataLayer/PostDBLayer";
import { IPost } from "../Types/PostModel";
import PostDBModel from "../Types/ModelsDB/PostDBModel";
import mongoose from "mongoose";
import { INewPostDTO } from "../Types/DTO/Post/NewPostDTO";

export default class PostServer {
  private static checkPost = (post: INewPostDTO) => {
    if (!post.subject || !post.header || !post.content) {
      throw new Error("All fields must be filled");
    }
  };

  public static createPost = async (post: INewPostDTO) => {
    try {
      this.checkPost(post);
      return await addNewItemDB(post);
    } catch (err) {
      throw (err as Error).message;
    }
  };

  public static getAllPosts = async () => {
    try {
      return await getAllItemsDB<IPost>(PostDBModel);
    } catch (err) {
      throw (err as Error).message;
    }
  };

  public static updatePost = async (
    id: mongoose.Types.ObjectId,
    post: IPost
  ) => {
    try {
      this.checkPost(post);
      return await updateItemDB<IPost>(PostDBModel, id, post);
    } catch (err) {
      throw (err as Error).message;
    }
  };

  public static deletePost = async (id: mongoose.Types.ObjectId) => {
    try {
      return await deleteItemDB<IPost>(PostDBModel, id);
    } catch (err) {
      throw (err as Error).message;
    }
  };
}
