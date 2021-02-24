// 1. Using sequelize create a model named Product, it should contain at least two properties.
// 2. Using express create an API with a product’s route containing the following methods:
//        List products
//        Create product
//        Get a product’s data
//        Update product
//        Delete product
// Tip 1: This API should accept JSON bodies, and return JSON responses
const Product = require("./product.model");
const productRouter = require("./product.routes");
const express = require("express");
const port = 2021;

const app = express();

(async () => {
  await Product.sync({ force: true });
})();

app.use("/product", productRouter);

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});