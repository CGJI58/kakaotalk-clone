export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const friends = (req, res) => {
  return res.render("friends", { pageTitle: "Friends" });
};
