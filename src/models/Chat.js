import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  title: String, //자동이지만 수정 가능하도록
  multiple: Boolean, //자동
  participants: {
    names: [String], //수동
    headCount: Number, //자동
  },
  dialog: [
    {
      sentence: String,
      speaker: String,
      timestamp: Date,
    },
  ],
});

const ChatModel = mongoose.model("Chat", chatSchema);
export default ChatModel;
