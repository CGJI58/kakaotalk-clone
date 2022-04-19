export const chats = (req, res) => {
  const fakeDB = [
    {
      title: "Tory",
      headCount: 1,
    },
    {
      title: "Watson",
      headCount: 1,
    },
  ];
  return res.render("chats", { pageTitle: "Chats", fakeDB });
};

export const chatRoom = (req, res) => {
  return res.render("chat", {
    pageTitle: `${req.params.id}`,
    chatRoomId: `${req.params.id}`,
  });
};

export const deleteChatRoom = (req, res) => {
  return res.send(`Delete room : ${req.params.id}`);
};
