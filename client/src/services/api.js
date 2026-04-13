import axios from "axios";

// This points to your Node.js backend
const API_URL = "https://practical8-shopverse-authentication.onrender.com"; 

const API = axios.create({ baseURL: API_URL });

// This middleware attaches your JWT token to every request automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Aligning these names with your components
export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`); // Added this for ProductDetail.js

export const loginUser = (data) => API.post("/auth/login", data);
export const registerUser = (data) => API.post("/auth/register", data);
export const processPayment = (data) => API.post("/payment/mock", data);
export const uploadImage = (formData) => API.post("/products/upload", formData);