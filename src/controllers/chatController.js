let rooms = [
  {
    participants: ["Elon Musk"],
    headCount: 1,
    lastChat: "Doge coin gazua!",
    id: 1,
  },
  {
    participants: ["Warron Buffet", "Bill Gates"],
    headCount: 2,
    lastChat: "Only Jon-bu is life way.",
    id: 2,
  },
];

export const chats = (req, res) => {
  return res.render("chats", { pageTitle: "Chats", rooms });
};

export const chatroom = (req, res) => {
  const { id } = req.params;
  const room = rooms[id - 1];
  return res.render("chatRoom", {
    pageTitle: `chat with ${room.title}`,
    chatRoomId: id,
  });
};
