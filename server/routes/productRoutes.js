const express = require('express');
const { 
  uploadProduct, 
  getProducts, 
  getProductById 
} = require('../controllers/productController');
const upload = require('../middleware/uploadMiddleware');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById); // Added this to fix the ReferenceError

// Protected routes (Requires JWT)
router.post('/upload', protect, upload.single('image'), uploadProduct);

module.exports = router;