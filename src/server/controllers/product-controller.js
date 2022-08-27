const productsService = require("../services/products-service");

const listProduct = async (req, res) => {
  try {
    const products = await productsService.listProduct();
    res.setHeader("Total", products.length);
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Error" });
  }
};

const saveProduct = async (req, res, next) => {
  const product = req.body;
  try {
    const savedProduct = await productsService.saveProduct(product);
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await productsService.getProduct(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const newProductInfo = req.body;

  try {
    const updatedProduct = await productsService.updateProduct(id, newProductInfo);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    await productsService.deleteProduct(id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listProduct,
  getProduct,
  saveProduct,
  updateProduct,
  deleteProduct,
};