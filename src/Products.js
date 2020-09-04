import React from 'react';
import Product from './Product';
import './Products.css';
import {arrayOf, object} from 'prop-types';


/* Product Card wrapper component which maps data to the product */
const Products = ({ products }) => (
    <div className="Products-grid">
      {products.map(product => <Product key={product.variantId} product={product} />)}
    </div>
  );

Products.propTypes = {
  products: arrayOf(object).isRequired
}

export default Products;
