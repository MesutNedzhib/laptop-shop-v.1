const express = require("express");
const Product = require("../models/ProductModel");
const {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
  getSingleProduct,
  getProductsByMultyFilter,
} = require("../controllers/products");
const productQueryMiddleware = require("../middlewares/query/productQueryMiddleware");

const router = express.Router();

router.post("/get-products-by-multy-filter", getProductsByMultyFilter);
router.get("/get-all-filters", getAllFilters);
router.get("/", productQueryMiddleware(Product), getAllProducts);
router.get("/:id", productQueryMiddleware(Product), getSingleProduct);

module.exports = router;
