import React from 'react';
import loginBg from "../assets/images/loginbg.jpg";

const ProductDetail = () => {
  const productData = [{
    name: 'Table',
    image: loginBg,
    description: 'Product description goes here...',
    price: 99.99,
  },{
    name: 'Chair',
    image: loginBg,
    description: 'Product description goes here...',
    price: 49.99,
  },{
    name: 'Sofa',
    image: loginBg,
    description: 'Product description goes here...',
    price: 199.99,
  },{
    name: 'Desk',
    image: loginBg,
    description: 'Product description goes here...',
    price: 79.99,
  },{
    name: 'Bookshelf',
    image: loginBg,
    description: 'Product description goes here...',
    price: 129.99,
  },
  {
    name: 'Table',
    image: loginBg,
    description: 'Product description goes here...',
    price: 99.99,
  },{
    name: 'Chair',
    image: loginBg,
    description: 'Product description goes here...',
    price: 49.99,
  },{
    name: 'Sofa',
    image: loginBg,
    description: 'Product description goes here...',
    price: 199.99,
  },{
    name: 'Desk',
    image: loginBg,
    description: 'Product description goes here...',
    price: 79.99,
  },{
    name: 'Bookshelf',
    image: loginBg,
    description: 'Product description goes here...',
    price: 129.99,
  }
];
  
  return (
    <div className="list-page">
      <h1>Product List</h1>
      <div className="product-list">
        {productData.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p className="description">{product.description}</p>
              <p className="price">${product.price}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
