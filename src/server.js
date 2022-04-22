import "./db";
import "./models/Chat";
import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import chatRouter from "./routers/chatRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);
app.use("/chats", chatRouter);
app.use("/users", userRouter);

export default app;
