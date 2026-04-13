const Product = require('../models/Product');

// Controller to handle new product uploads with images
const uploadProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const product = new Product({
      name,
      price,
      description,
      image: req.file.path, // Path provided by Cloudinary/Multer middleware
    });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to fetch a single product by ID (Fixes the frontend detail view)
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { uploadProduct, getProducts, getProductById };