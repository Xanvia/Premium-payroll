import express from "express";
import connect_db from "./config/dbConfig.js";
import { configDotenv } from "dotenv";

configDotenv();

const db_url = process.env.DB_URL;
const app = express();
connect_db(db_url);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
