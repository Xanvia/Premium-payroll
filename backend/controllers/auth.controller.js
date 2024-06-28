import { addAdmin } from "../services/auth.service.js";

export const addAdminController = async (req, res) => {
  try {
    const adminData = req.body;
    const newAdmin = await addAdmin(adminData);
    const adminResponse = newAdmin.toObject
      ? newAdmin.toObject()
      : { ...newAdmin };
    delete adminResponse.password;
    res
      .status(201)
      .json({ message: "Admin created successfully", admin: adminResponse });
  } catch (error) {
    if (error.message.includes("already exists")) {
      return res
        .status(400)
        .json({ message: "Error creating admin", error: error.message });
    }
    res
      .status(500)
      .json({ message: "Error creating admin", error: error.message });
  }
};
