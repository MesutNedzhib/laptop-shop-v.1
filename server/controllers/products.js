const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");
const data = require("../data.js");
const countDublicatedItems = require("../helpers/products/countDublicatedItems");

const insertManyProductsToMongo = expressAsyncHandler(async (req, res) => {
  const insertedProducts = await Product.insertMany(data.products);
  res.status(200).json({
    message: "success",
    data: insertedProducts,
  });
});

const isWork = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Work",
  });
});

const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.status(200).json({
    success: true,
    message: "All Products",
    data: products,
  });
});

const getAllFilters = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
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
    message: "Get Filters",
    data: filters,
  });
});

module.exports = {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
};
