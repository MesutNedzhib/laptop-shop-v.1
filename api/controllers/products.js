const expressAsyncHandler = require("express-async-handler");
const CustomError = require("../helpers/error/CustomError");
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

const getAllProducts = expressAsyncHandler(async (req, res, next) => {
  if (res.queryResults.data.length === 0) {
    return next(new CustomError("Not found a product", 400));
  }
  res.status(200).json(res.queryResults);
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
    message: "GET FILTERS",
    data: filters,
  });
});

const getSingleProduct = expressAsyncHandler(async (req, res) => {
  res.status(200).json(res.queryResults);
});

const getProductByName = expressAsyncHandler(async (req, res, next) => {
  const products = await Product.find({});

  let findedProduct = products.filter(
    (item) =>
      item.name.toLowerCase().indexOf(req.body.value.toLowerCase()) !== -1
  );

  if (findedProduct.length !== 0) {
    res.status(200).json({
      success: true,
      message: "GET PRODUCT BY NAME",
      data: findedProduct,
    });
  } else {
    res.status(404).json({
      success: true,
      message: `GET PRODUCT BY NAME - NOT FOUND!`,
    });
  }
});

const getProductsByMultyFilter = expressAsyncHandler(async (req, res, next) => {
  const { model } = req.body;

  const products = await Product.find(model);

  if (products.length !== 0) {
    res.status(200).json({
      success: true,
      message: `FINDED PRODUCTS`,
      data: products,
    });
  } else {
    res.status(404).json({
      success: true,
      message: `NOT FOUND`,
    });
  }
});

module.exports = {
  insertManyProductsToMongo,
  getAllProducts,
  getAllFilters,
  getSingleProduct,
  getProductByName,
  getProductsByMultyFilter,
};
