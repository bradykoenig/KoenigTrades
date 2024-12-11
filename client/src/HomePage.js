import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [ticker, setTicker] = useState(''); // State for stock ticker input
    const navigate = useNavigate(); // Hook for navigation

    const handleSearch = () => {
        if (ticker.trim() !== '') {
            navigate(`/stock/${ticker.toUpperCase()}`); // Navigate to StockPage
        }
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Welcome to the Stock App</h1>
            <p>Enter a stock ticker to view its chart and information:</p>
            <input
                type="text"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
                placeholder="Enter Stock Ticker (e.g., AAPL)"
                style={{
                    padding: '10px',
                    marginRight: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}
            />
            <button
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Search
            </button>
        </div>
    );
}

export default HomePage;
