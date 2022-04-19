import express from "express";
import { chats, chatRoom, deleteChatRoom } from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.get("/", chats);
chatRouter.get("/:id(\\d+)", chatRoom);
chatRouter.get("/:id(\\d+)/delete", deleteChatRoom);

export default chatRouter;
