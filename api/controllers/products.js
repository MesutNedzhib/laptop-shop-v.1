const expressAsyncHandler = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
const Product = require("../models/ProductModel");
const countDublicatedItems = require("../helpers/products/countDublicatedItems");

const getAllProducts = expressAsyncHandler(async (req, res, next) => {
  if (res.queryResults.data.length === 0) {
    return next(new CustomError("Not found a product", 400));
  }
  res.status(200).json(res.queryResults);
});

const getAllFilters = expressAsyncHandler(async (req, res) => {
  const products = await Product.find();
  const filters = {};
  filters.brand = countDublicatedItems(
    products.map((item) => {
      return item.brand;
    })
  );

  filters.processor = countDublicatedItems(
    products.map((item) => {
      return item.processor;
    })
  );
  filters.memory = countDublicatedItems(
    products.map((item) => {
      return item.memory;
    })
  );

  filters.video = countDublicatedItems(
    products.map((item) => {
      return item.video;
    })
  );

  filters.storage = countDublicatedItems(
    products.map((item) => {
      return item.storage;
    })
  );

  res.status(200).json({
    success: true,
    message: "GET FILTERS",
    data: filters,
  });
});

const getSingleProduct = expressAsyncHandler(async (req, res, next) => {
  res.status(200).json(res.queryResults);
});

const getProductsByMultyFilter = expressAsyncHandler(async (req, res, next) => {
  const { model } = req.body;

  const products = await Product.find(model);

  res.status(200).json({
    success: true,
    data: products,
  });
});

module.exports = {
  getAllProducts,
  getAllFilters,
  getSingleProduct,
  getProductsByMultyFilter,
};
