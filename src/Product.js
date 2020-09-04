import React from 'react';
import './Product.css';
import { shape, number, string } from 'prop-types';

const toImageUrl = (product) =>
  `//res.cloudinary.com/imperfect/image/upload/w_400,h_260,c_pad,b_auto,d_products:no-image-found.png/${product.imageFilename}`;

  /* Product Card Component */
const Product = ({ product }) => {
  return (
    <div className="Product-card">
      <div>
        <img
          src={toImageUrl(product)}
          alt={product.name}
        />
      </div>
      <div className="product-name">
        {product.name}
      </div>
      <div className="product-descriptor">
        ${product.price} | {product.packageUnitAmount} {product.packageUnitFormatted}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: shape({
    price: number,
    packageUnitAmount: number,
    packageUnitFormatted: string
  })
}

export default Product;
