import React from 'react';
import { useParams } from 'react-router-dom';
import TradingViewChart from './TradingViewChart';

function StockPage() {
    const { symbol } = useParams(); // Retrieve stock ticker from URL

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>{symbol.toUpperCase()} Stock</h1>
            <TradingViewChart symbol={symbol} />
        </div>
    );
}

export default StockPage;
