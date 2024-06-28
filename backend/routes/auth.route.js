import express from "express";
// import { addAdmin } from "../controllers/auth.controller";
import { authService } from "../services/auth.service.js";

const addAdmin = async (req, res) => {
  try {
    // const adminData = req.body;
    // const newAdmin = await addAdmin(adminData);
    res
      .status(201)
      .json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating admin", error: error.message });
  }
};

const router = express.Router();

router.post("/admin", addAdmin);

export default router;
