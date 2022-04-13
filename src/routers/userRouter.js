import express from "express";
import { friends } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", friends);

export default userRouter;
