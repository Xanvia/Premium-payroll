import express from "express";
import { addAdminController } from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/admin", addAdminController);

export default authRouter;
