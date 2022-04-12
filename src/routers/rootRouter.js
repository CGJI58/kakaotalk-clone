import express from "express";
import { home } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", home);

export default rootRouter;
