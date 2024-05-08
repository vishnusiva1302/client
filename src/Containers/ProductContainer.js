

import React, { useState, useEffect } from 'react';
import ProductList from '../Components/ProductList';


const ProductContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from an API
    fetch('http://127.0.0.1:3000/product')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-container">
      <h1>Our Products</h1>
      
      <ProductList products={products}/>
    </div>
  );
};

export default ProductContainer;
