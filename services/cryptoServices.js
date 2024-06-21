const axios = require('axios');
const { getPortfolio, updatePortfolio } = require('./portfolio');

const getBitcoinPrice = async () => {
  const { data } = await axios.get(
    'https://api.coindesk.com/v1/bpi/currentprice/BTC.json'
  );
  return data.bpi.USD.rate_float;
};

const buyBitcoin = async (amount) => {
  try {
    const bitcoinPrice = await getBitcoinPrice();
    updatePortfolio(amount, amount * bitcoinPrice);
    return {
      message: 'Bitcoin purchased successfully',
      portfolio: getPortfolio()
    };
  } catch (error) {
    throw new Error('Error fetching bitcoin price');
  }
};

const sellBitcoin = async (amount) => {
  try {
    const portfolio = getPortfolio();
    const bitcoinPrice = await getBitcoinPrice();
    if (portfolio.bitcoins - amount < 0) {
      return {
        message: 'Not enough bitcoins',
        portfolio: getPortfolio()
      };
    }
    updatePortfolio(-amount, -amount * bitcoinPrice);
    return {
      message: 'Bitcoin sold successfully',
      portfolio: getPortfolio()
    };
  } catch (error) {
    throw new Error('Error fetching bitcoin price');
  }
};

module.exports = { buyBitcoin, sellBitcoin };
