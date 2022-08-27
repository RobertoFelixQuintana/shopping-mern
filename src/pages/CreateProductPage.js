import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import CreateProduct from '../components/CreateProduct';

import { getProduct } from "../server/api/productsApi";

const CreateProductPage = ({ onSave }) => {
  const params = useParams()
  const { productId } = params
  
  const [product, setProduct] = useState()

  useEffect(() => {
    getProductWId(productId)
  }, [productId])

  const getProductWId = async id => {
    if (id) {
      const product = await getProduct(id)
      if (product)
        setProduct(product)
    }
  }

  return (
    <CreateProduct
      product={product}
      onSave={onSave}
    />
  );
};

export default CreateProductPage;