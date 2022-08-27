const Product = require("../models/product");

const listProduct = async () => {
  const product = await Product.find().lean().exec();
  return product;
};

const saveProduct = async (product) => {
  const newProduct = new Product(product);
  await newProduct.save();
  return newProduct;
};

const getProduct = async (id) => {
  const product = await Product.findById(id).lean().exec();
  return product;
};

const updateProduct = async (id, product) => {
  const updatedProduct = await Product.findByIdAndUpdate(id, product, {
    returnDocument: "after",
  })
    .lean()
    .exec();

  return updatedProduct;
};

const deleteProduct = async (id) => {
  await Product.findByIdAndDelete(id).exec();
};
 
module.exports = {
  listProduct,
  saveProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};