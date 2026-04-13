import React, { useState } from 'react';
import { uploadImage } from '../services/api';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    formData.append('image', image);

    try {
      await uploadImage(formData);
      alert('Product Added Successfully to Cloudinary!');
      window.location.reload();
    } catch (err) {
      alert('Upload failed. Check if you are logged in.');
    }
  };

  return (
    <div className="form-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleUpload}>
        <input 
          type="text" 
          placeholder="Product Name" 
          onChange={(e) => setProduct({...product, name: e.target.value})} 
          required 
        />
        <input 
          type="number" 
          placeholder="Price" 
          onChange={(e) => setProduct({...product, price: e.target.value})} 
          required 
        />
        <textarea 
          placeholder="Description" 
          onChange={(e) => setProduct({...product, description: e.target.value})} 
        />
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
          required 
        />
        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
};

export default AddProduct;