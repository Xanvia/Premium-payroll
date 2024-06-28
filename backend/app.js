import express from "express";
import connect_db from "./config/dbConfig.js";
import { configDotenv } from "dotenv";
import authRouter from "./routes/auth.route.js";
import expensesRouter from "./routes/expenses.route.js";

configDotenv();

const db_url = process.env.DB_URL;
const app = express();
connect_db(db_url);

app.use(express.json());
app.set("query parser", "extended");

app.use("/api/auth", authRouter);
app.use("/api/expenses", expensesRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
