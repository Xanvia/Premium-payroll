import express from "express";
import { createUserAndExpenses } from "../controllers/expenses.controller.js";

const expensesRouter = express.Router();

expensesRouter.post("/", createUserAndExpenses);

export default expensesRouter;
