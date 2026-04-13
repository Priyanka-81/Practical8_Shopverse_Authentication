import React, { useState } from 'react';
import { loginUser, registerUser } from '../services/api';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = isLogin ? await loginUser(formData) : await registerUser(formData);
      localStorage.setItem('token', data.token);
      alert('Success! Logged in.');
      window.location.reload(); 
    } catch (err) {
      alert(err.response?.data?.message || 'Authentication failed');
    }
  };

  return (
    <div className="form-container">
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setFormData({...formData, name: e.target.value})} 
            required 
          />
        )}
        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setFormData({...formData, email: e.target.value})} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
          required 
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button className="secondary-btn" onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
};

export default Auth;