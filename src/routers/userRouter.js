import express from "express";
import { friends, find, more, settings } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", friends);
userRouter.get("/find", find);
userRouter.get("/more", more);
userRouter.get("/settings", settings);

export default userRouter;
