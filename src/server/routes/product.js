const express = require('express');
const router = express.Router();

const productsController = require("../controllers/product-controller");

const productsMiddleware = require("../middlewares/products-middlewares");

// /products/

router.get("/", productsController.listProduct);

router.post("/", productsMiddleware.validateProduct, productsController.saveProduct);

router.get("/:id", productsController.getProduct);

router.delete("/:id", productsController.deleteProduct);

router.put("/:id", productsController.updateProduct);

module.exports = router;