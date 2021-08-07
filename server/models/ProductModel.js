const mongoose = require("mongoose");

const productScheme = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    brand: { type: String, required: true },
    images: { type: Array, required: true },
    processor: { type: String, required: true },
    processorModel: { type: String, required: true },
    memory: { type: String, required: true },
    video: { type: String, required: true },
    storage: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productScheme);

module.exports = Product;
