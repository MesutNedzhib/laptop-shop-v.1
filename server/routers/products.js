const express = require("express");
const {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
} = require("../controllers/products");

const router = express.Router();

router.get("/insert-many", insertManyProductsToMongo);
router.get("/get-all-products", getAllProducts);
router.get("/get-all-filters", getAllFilters);
module.exports = router;
