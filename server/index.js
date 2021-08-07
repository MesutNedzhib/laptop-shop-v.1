const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase.js");
const routers = require("./routers");
const cors = require("cors");

const app = express();

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", routers);

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.listen(PORT || 3000, () => {
  console.log(`App Started on PORT ${PORT} : 'http://localhost:${PORT}'`);
});
