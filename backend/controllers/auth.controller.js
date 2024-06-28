import * as authService from "../services/auth.service.js";

export const addAdmin = async (req, res) => {
  try {
    // const adminData = req.body;
    // const newAdmin = await authService.addAdmin(adminData);
    res
      .status(201)
      .json({ message: "Admin created successfully", admin: newAdmin });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating admin", error: error.message });
  }
};
