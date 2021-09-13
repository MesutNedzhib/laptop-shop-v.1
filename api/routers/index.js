const express = require("express");
const product = require("./product");

const router = express.Router();

router.use("/products", product);

module.exports = router;
