

import React from 'react';
import Product from './Products';


const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (

        <Product key={index} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
