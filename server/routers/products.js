const express = require("express");
const {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
  getProductById,
} = require("../controllers/products");

const router = express.Router();

router.get("/insert-many", insertManyProductsToMongo);
router.get("/get-all-products", getAllProducts);
router.get("/get-all-filters", getAllFilters);
router.post("/get-product-by-id", getProductById);
module.exports = router;
