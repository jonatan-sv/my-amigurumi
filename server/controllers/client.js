import path from "path";

export const getClientPage = (req, res) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
};

export const redirectClient = (req, res) => res.redirect("/");
