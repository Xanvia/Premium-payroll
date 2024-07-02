import User from "../models/user.model.js";

export const addOrGetUser = async (userData) => {
  try {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      // If user exists, return the existing user
      return existingUser;
    }

    // If no user exists with the given email, create a new user
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};
