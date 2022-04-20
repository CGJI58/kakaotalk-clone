import express from "express";
import { chats, chatroom } from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.get("/", chats);
chatRouter.get("/:id(\\d+)", chatroom);

export default chatRouter;
