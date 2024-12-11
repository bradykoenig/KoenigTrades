import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import StockPage from './StockPage';

function App() {
    return (
        <Router>
            <Routes>
                {/* Home Page for entering stock tickers */}
                <Route path="/" element={<HomePage />} />
                {/* Stock Page for viewing stock details and chart */}
                <Route path="/stock/:symbol" element={<StockPage />} />
            </Routes>
        </Router>
    );
}

export default App;
