import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product._id}>
            
            <img src={product.image} alt={product.name} />

            <h4>{product.name}</h4>

            <p className="price">${product.price}</p>

            <Link to={`/product/${product._id}`}>
              <button className="btn">View Details</button>
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;