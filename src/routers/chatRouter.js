import express from "express";
import { chats } from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.get("/", chats);

export default chatRouter;
