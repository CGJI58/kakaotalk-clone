import express from "express";
import {
  chats,
  chatRoom,
  getCreateChatRoom,
  postCreateChatRoom,
} from "../controllers/chatController";

const chatRouter = express.Router();

chatRouter.get("/", chats);
chatRouter
  .route("/createchatroom")
  .get(getCreateChatRoom)
  .post(postCreateChatRoom);
chatRouter.get("/:id(\\d+)", chatRoom);

export default chatRouter;
