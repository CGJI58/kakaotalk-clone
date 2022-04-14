export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home" });
};

export const friends = (req, res) => {
  return res.render("friends", { pageTitle: "Friends" });
};

export const login = (req, res) => {
  return res.render("login", { pageTitle: "Log in" });
};

export const join = (req, res) => {
  return res.render("join", { pageTitle: "Join" });
};

export const find = (req, res) => {
  return res.render("find", { pageTitle: "Find" });
};

export const more = (req, res) => {
  return res.render("more", { pageTitle: "More" });
};

export const settings = (req, res) => {
  return res.render("settings", { pageTitle: "Settings" });
};
