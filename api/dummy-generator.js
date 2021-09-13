const Product = require("./models/ProductModel");
const data = require("./dummy/data.js");
const connectDatabase = require("./helpers/database/connectDatabase");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config/env/config.env",
});

connectDatabase();

const importAllData = async function () {
  try {
    await Product.insertMany(data.products);
    console.log("Import Process Successful");
  } catch (err) {
    console.log(err);
    console.err("There is a problem with import process");
  } finally {
    process.exit();
  }
};

const deleteAllData = async function () {
  try {
    await Product.deleteMany();
    console.log("Delete Process Successful");
  } catch (err) {
    console.log(err);
    console.err("There is a problem with delete process");
  } finally {
    process.exit();
  }
};

if (process.argv[2] == "--import") {
  importAllData();
} else if (process.argv[2] == "--delete") {
  deleteAllData();
}
