const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
    }
  },
};