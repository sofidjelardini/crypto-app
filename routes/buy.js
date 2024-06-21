const express = require('express');
const router = express.Router();

const { buyBitcoin } = require('../services/cryptoServices');

router.post('/', async (req, res) => {
  const { amount } = req.body;
  try {
    const result = await buyBitcoin(amount);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
