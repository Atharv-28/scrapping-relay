const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// Configure CORS to allow requests from the specific origin
app.use(cors({
  origin: 'https://eco-cart-frontend.vercel.app'
}));

app.use(express.json());

app.post('/scrape', async (req, res) => {
  try {
    const response = await axios.post('http://eco-cart.servehttp.com:5000/scrape', req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to reach backend' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Relay listening on port ${PORT}`));
