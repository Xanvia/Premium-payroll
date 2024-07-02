import { Admin } from "../models/admin.model.js";

export const addAdmin = async (adminData) => {
  try {
    const newAdmin = new Admin(adminData);
    await newAdmin.save();
    return newAdmin;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error(
        `An admin with the email ${adminData.email} already exists.`
      );
    }
    throw error;
  }
};
