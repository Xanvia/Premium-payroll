import Admin from "./admin.model.js";

exports.addAdmin = async (adminData) => {
  const newAdmin = new Admin(adminData);
  await newAdmin.save();
  return newAdmin;
};
