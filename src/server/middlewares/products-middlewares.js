const validateProduct = (req, res, next) => {
    const product = req.body;
  
    const name = product.name?.trim?.() ?? "";
    if (name === "") {
      return res.status(400).json({ message: "Name is required" });
    }
  
    next();
  };
  
  module.exports = {
    validateProduct,
  };