const processPayment = (req, res) => {
  const { amount } = req.body;
  // Mock Logic: Success if amount is provided
  if (amount > 0) {
    res.json({ success: true, message: 'Payment Mock Successful', transactionId: 'PAY-' + Date.now() });
  } else {
    res.status(400).json({ success: false, message: 'Invalid payment amount' });
  }
};

module.exports = { processPayment };