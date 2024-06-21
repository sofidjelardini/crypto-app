let portfolio = {
  bitcoins: 0,
  invested: 0
};

const getPortfolio = () => {
  return portfolio;
};

const updatePortfolio = (bitcoins, invested) => {
  portfolio.bitcoins += bitcoins;
  portfolio.invested += invested;
};

module.exports = { getPortfolio, updatePortfolio };
