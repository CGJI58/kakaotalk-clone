import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  title: String,
  multiple: Boolean,
  participants: {
    names: [String],
    headCount: Number,
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
