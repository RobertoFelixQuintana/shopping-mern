import React, { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Product.css";

const Product = ({ product, productId, handleOnDelete }) => {
  const [ammount, setAmmount] = useState(undefined);
  const handleChangeInput = (event) => {
    console.log(event);
    setAmmount(product.price * event.target.value);
  };
  return (
    <div className="card">
      <div className="card-header">
        <span className="badge bg-secondary">
          {product.updatedAt &&
            format(new Date(product.updatedAt), "MMMM dd, yyyy")}
        </span>
        <div className="card-header-title">
          <h3 className="card-header-title-h3">{product.name}</h3>
        </div>
        <div className="card-header-img">
          <img
            className="card-img-top"
            src={product.imageUrl}
            alt="img-product"
            width="60"
            height="120"
          />
        </div>
      </div>
      <div className="card-body">
        <form className="form-card-body">
          <div className="card-body-details">
            <div className="card-body-details-text">
              <span className="badge bg-success">Description</span>
              <br />
              {product.description}
              <br />
              <span className="badge bg-success">Price</span>
              <br />${product.price}.00
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">Quantity</span>
              <input
                type="number"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
                min={1}
                defaultValue={1}
                onChange={(event) => handleChangeInput(event)}
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text">Total $</span>
              <input
                type="text"
                className="form-control text-align-right"
                aria-label="Amount (to the nearest dollar)"
                value={ammount || product.price}
                readOnly={true}
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>

          <div className="card-body-btn d-grid gap-2">
            <button className="btn btn-success">Buy</button>
            <Link
              className="edit-btn-product btn btn-primary"
              to={`/create-product/${productId}`}
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleOnDelete(productId)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
