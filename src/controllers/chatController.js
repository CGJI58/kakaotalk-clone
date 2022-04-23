import nodemon from "nodemon";
import Chat from "../models/Chat";

export const chats = async (req, res) => {
  const chatRooms = await Chat.find({});
  return res.render("chats", {
    pageTitle: "Chats",
    chatRooms: [],
  });
};

export const getCreateChatRoom = (req, res) => {
  return res.render("createchatroom", { pageTitle: "New chat" });
};

export const postCreateChatRoom = (req, res) => {
  const { friends } = req.body;
  const chat = new Chat({
    title: friends,
    multiple: friends.split(",").length > 1,
    participants: {
      names: friends.split(","),
      headCount: friends.split(",").length,
    },
    dialog: [
      {
        sentence: "hello",
        speaker: "Watson",
        timestamp: Date.now(),
        _id: null,
      },
    ],
  });
  console.log(chat);
  return res.send("postCreateChatRoom");
};

export const chatRoom = (req, res) => {
  const { id } = req.params;
  return res.render("chatRoom", {
    pageTitle: `chat with`,
    chatRoomId: id,
  });
};
