const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");
const data = require("../data.js");

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

module.exports = {
  insertManyProductsToMongo,
  isWork,
};
