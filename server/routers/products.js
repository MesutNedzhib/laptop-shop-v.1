const express = require("express");
const {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
  getProductById,
  getProductByName,
  getProductsByMultyFilter,
} = require("../controllers/products");

const router = express.Router();

router.get("/insert-many", insertManyProductsToMongo);
router.get("/get-all-products", getAllProducts);
router.get("/get-all-filters", getAllFilters);
router.post("/get-product-by-id", getProductById);
router.get("/product-by-name", getProductByName);
router.post("/get-product-by-multy-filter", getProductsByMultyFilter);
module.exports = router;
