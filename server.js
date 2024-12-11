const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const TWELVE_DATA_API_KEY = process.env.TWELVE_DATA_API_KEY;

app.use(express.json());

// Endpoint to fetch live stock data
app.get('/api/stock/:symbol', async (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const interval = req.query.interval || '1min'; // Default interval is 1min

    try {
        const response = await axios.get(
            `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&apikey=${TWELVE_DATA_API_KEY}`
        );

        if (response.data && response.data.values) {
            res.json(response.data);
        } else {
            res.status(404).json({ error: `No data found for symbol: ${symbol}` });
        }
    } catch (error) {
        console.error('Error fetching data from Twelve Data:', error.message);
        res.status(500).json({ error: 'Error fetching data from Twelve Data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
