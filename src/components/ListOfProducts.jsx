import React from "react";
import Product from "./Product";
import './ListOfProducts.css'


const ListOfProducts = ({ products, handleOnDelete }) => {
  return (
    <>
      <div className="h-auto w-100">
        <div className="row list-products-container w-100">
          {products.map((products) => {
            return (
              <Product
                key={products.updatedAt + products.name}
                product={products}
                productId={products._id}
                handleOnDelete={handleOnDelete}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListOfProducts;
