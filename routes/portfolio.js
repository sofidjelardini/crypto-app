const express = require('express');
const router = express.Router();

const { getPortfolio } = require('../services/portfolio');

router.get('/', (req, res) => {
  res.status(200).json({
    portfolio: getPortfolio()
  });
});

module.exports = router;
