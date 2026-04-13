import React from 'react';
import ProductList from './components/ProductList';
import Auth from './components/Auth';
import AddProduct from './components/AddProduct';
import './App.css';


function App() {
  const token = localStorage.getItem('token');

  return (
    <div className="App">
      <nav className="navbar">
        <h1>SHOPVERSE.</h1>
        {token && (
          <button 
            style={{ width: 'auto', padding: '0.5rem 1rem' }} 
            onClick={() => { localStorage.removeItem('token'); window.location.reload(); }}
          >
            Logout
          </button>
        )}
      </nav>
      
      <main>
        {!token ? (
          <Auth />
        ) : (
          <AddProduct />
        )}

        <section className="product-section">
          <h2 style={{ textAlign: 'center', margin: '3rem 0 1rem' }}>Featured Products</h2>
          <ProductList />
        </section>
      </main>
    </div>
  );
}

export default App;