import { Router } from "express";
import { createDataGraph, getGraphByUserId } from "../Controllers/GraphController";
import verifyUser from "../Middleware/verifyUser";

export const graphRouter = Router();

graphRouter.get('/',verifyUser,getGraphByUserId);
graphRouter.post('/',verifyUser,createDataGraph);