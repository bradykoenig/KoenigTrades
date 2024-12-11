const path = require('path');

module.exports = {
    devServer: {
        allowedHosts: 'all', // Allow all hosts
        port: 3000, // Default React dev server port
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
};
