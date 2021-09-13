const express = require("express");
const Product = require("../models/ProductModel");
const {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
  getSingleProduct,
  getProductByName,
  getProductsByMultyFilter,
} = require("../controllers/products");
const productQueryMiddleware = require("../middlewares/query/productQueryMiddleware");

const router = express.Router();

router.get("/insert-many", insertManyProductsToMongo);
router.get("/", productQueryMiddleware(Product), getAllProducts);
router.get("/get-all-filters", getAllFilters);
router.get("/:id", productQueryMiddleware(Product), getSingleProduct);
router.post("/get-product-by-name", getProductByName);
router.post("/get-products-by-multy-filter", getProductsByMultyFilter);
module.exports = router;
