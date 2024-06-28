import express from "express";
import { addAdminController } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/admin", addAdminController);

export default router;
