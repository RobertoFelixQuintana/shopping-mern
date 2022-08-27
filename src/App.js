import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";

// Pages
import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFoundPage";
import CreateProductPage from "./pages/CreateProductPage";

import {
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "./server/api/productsApi";
import './App.css'

const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const products = await getProducts();
    console.log("Products", products);
    setAllProducts(products);
  };

  const handleOnSave = async (product) => {
    const savedProduct = await saveProduct(product);
    if (savedProduct) setAllProducts([...allProducts, savedProduct]);
    navigate("/", { replace: true });
  };

  const handleOnEdit = async (productId, product) => {
    const editedProduct = await updateProduct(productId, product);
    if (editedProduct) {
      const copyOfProducts = Array.from(allProducts);
      const result = copyOfProducts.filter(
        (product) => product._id !== productId
      );
      setAllProducts([...result, editedProduct]);
    }
    navigate("/", { replace: true });
  };
  const handleOnDelete = async (id) => {
    const isDeleted = await deleteProduct(id);
    if (isDeleted) {
      const copyOfProducts = Array.from(allProducts);
      const result = copyOfProducts.filter((product) => product._id !== id);
      setAllProducts(result);
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="app vh-90 w-100">
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<Products allProducts={allProducts} handleOnDelete={handleOnDelete}/>}
        />
        <Route
          path="create-product"
          element={<CreateProductPage onSave={handleOnSave} />}
        />
        <Route
          path="product/:productId"
          element={<CreateProductPage onSave={handleOnEdit} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
export default App;
