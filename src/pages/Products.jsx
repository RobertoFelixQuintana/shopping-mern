import React from "react";
import ListOfProducts from "../components/ListOfProducts";

const Products = ({ allProducts, handleOnDelete }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ListOfProducts
          products={allProducts}
          handleOnDelete={handleOnDelete}
        />
      </div>
    </>
  );
};

export default Products;
