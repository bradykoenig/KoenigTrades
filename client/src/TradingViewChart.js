import React, { useEffect } from 'react';

function TradingViewChart({ symbol }) {
    useEffect(() => {
        // Check if TradingView is available
        if (!window.TradingView) {
            console.error('TradingView library is not loaded.');
            return;
        }

        // Initialize TradingView widget
        new window.TradingView.widget({
            symbol: `NASDAQ:${symbol}`, // Modify exchange as needed
            container_id: 'tradingview_chart',
            width: '100%',
            height: 500,
            timezone: 'Etc/UTC',
            theme: 'light',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: true,
            studies: ['MACD@tv-basicstudies'],
            range: '1D', // Default range
        });
    }, [symbol]);

    return <div id="tradingview_chart" />;
}

export default TradingViewChart;
