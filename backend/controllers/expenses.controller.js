import { addOrGetUser } from "../services/user.service.js";
import { addExpenses } from "../services/expenses.service.js";

export const createUserAndExpenses = async (req, res) => {
  try {
    const { userData, expensesData } = req.body;

    const user = await addOrGetUser(userData);

    const expenses = await addExpenses(user._id, expensesData);

    res.status(201).json({ user, expenses });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
