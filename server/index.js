import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./helpers/database/connectDatabase.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
  console.log(`App Started on PORT ${PORT} : 'http://localhost:${PORT}'`);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
