const express = require("express");
const Product = require("./product.model");
const router = express.Router();

router.use(express.json());

//List products
router.get("/", async (req, res) => {
    try {
        const allProducts = await Product.findAll();
        res.send({ Products: allProducts });
    } catch (error) {
        console.log(error);
    }

});
//Create product
router.post("/", async (req, res,) => {
    try {
        const product = Product.build(req.body);
        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
    }
});
//Get a product’s data
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (product) {
            res.send(product)
        } else {
            res.send("Product not found");
        };
    } catch (error) {
        console.log(error);
    }

});
//Update product
router.put("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (product) {
            product.id = req.body.id;
            product.description = req.body.description;
            await product.save();
            res.send(product);
        } else {
            res.send("Product not found");
        };
    } catch (error) {
        console.log(error);
    }

});
//Delete product
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (product) {
            product.destroy();
            res.send(product);
        } else {
            res.send("Product not found");
        };
    } catch (error) {
        console.log(error);
    }

});

module.exports = router;

