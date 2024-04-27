// src/components/AddProduct.js
import React, { useState } from 'react';
// import './AddProduct.css'; // Import CSS file for styling

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null); // State for the uploaded image

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new product object with form values
    const newProduct = {
      name: productName,
      description: description,
      price: price,
      image: image, // Include the image in the new product object
    };
    // Call the onAddProduct function from the parent component
    onAddProduct(newProduct);
    // Reset form fields after submission
    setProductName('');
    setDescription('');
    setPrice('');
    setImage(null); // Reset image state
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          accept="image/*" // Accept only image files
          required
        />
        <br/>
        <br/>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
