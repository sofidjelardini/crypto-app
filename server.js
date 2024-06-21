const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const buyRoute = require('./routes/buy');
const sellRoute = require('./routes/sell');
const portfolioRoute = require('./routes/portfolio');

app.use('/api/buy', buyRoute);
app.use('/api/sell', sellRoute);
app.use('/api/portfolio', portfolioRoute);

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
