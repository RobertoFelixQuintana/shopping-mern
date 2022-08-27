import React, { useState, useEffect } from "react"
import {Link} from 'react-router-dom'
import "./CreateProduct.css";

const CreateProduct = ({ onSave, product }) => {

  const defaultNewProduct = {
    name: '',
    description: '',
    imageUrl: '',
    updatedAt: (new Date()).toISOString(),
    price: '',
    quantity: '',
    total: '',
  }

  const [newProduct, setNewProduct] = useState(defaultNewProduct)

  useEffect(() => {
    if (product)
      setNewProduct(product)
  }, [product])

  const handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    setNewProduct({ ...newProduct, [name]: value })
  }

  return (
    <div className="container-form">
      <form id='create-product-form' className="product-form">
        <div className="input-field">
          <span className="badge bg-success badge-text">Product name</span>
          <input
            type="text"
            name="name"
            placeholder="Add a name"
            value={newProduct.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="input-field">
          <span className="badge bg-success badge-text">Description</span>
          <textarea
            style={{ height: "200px" }}
            type="text"
            name="description"
            placeholder="Add a description of a product"
            value={newProduct.description}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-field">
          <span className="badge bg-success badge-text">Add an image</span>
          <input
            type="text"
            name="imageUrl"
            placeholder="Add an image url"
            value={newProduct.imageUrl}
            onChange={handleOnChange}
          />
          {
            newProduct.imageUrl !== '' &&
            <img
              style={{
                marginTop: "40px",
                maxHeight: "200px",
                maxWidth: "400px",
                alignSelf: "center",
                borderRadius: "8px",
              }}
              src={newProduct.imageUrl}
              alt="img"
            />
          }
        </div>

        <div className="input-field">
          <span className="badge bg-success badge-text">Price</span>
          <input
            type="number"
            name="price"
            placeholder="Enter the price of the product"
            value={newProduct.price}
            onChange={handleOnChange}
          />
        </div>

        <div className="input-field">
          <span className="badge bg-success badge-text">Quantity</span>
          <input
            type="number"
            name="quantity"
            placeholder="Enter the quantity of the product"
            value={newProduct.quantity}
            onChange={handleOnChange}
          />
        </div>

        <div className="buttons-container">
          <Link
            to="/"
          >
            Cancel
          </Link>
          <button
            type="button"
            disabled={newProduct.name === '' || newProduct.description === ''}
            onClick={() => {
              if (product?._id)
                onSave(product._id, newProduct)
              else
                onSave(newProduct)
            }}>
            {product ? 'Update product': 'Save a new product'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct;