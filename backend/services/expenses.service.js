import { Expenses } from "../models/expenses.model.js";

export const addExpenses = async (user,expensesData) => {
  try {
    expensesData.user = user;
    const newExpenses = new Expenses(expensesData);
    await newExpenses.save();
    return newExpenses;
  } catch (error) {
    throw error;
  }
};
