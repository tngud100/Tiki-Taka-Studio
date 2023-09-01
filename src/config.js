// src/config.js
const config = {
  production: {
    apiUrl: 'http://티키타카.kr:81',
  },
  development: {
    apiUrl: '/studio', // Use the same base URL as the proxy configuration
  },
};

export default config;