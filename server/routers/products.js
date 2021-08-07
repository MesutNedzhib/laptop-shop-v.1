const express = require("express");
const {
  insertManyProductsToMongo,
  isWork,
} = require("../controllers/products");

const router = express.Router();

router.get("/insert-many", insertManyProductsToMongo);
router.get("/", isWork);
module.exports = router;
