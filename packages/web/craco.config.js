const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@api': path.resolve(__dirname, 'src/api'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@provider': path.resolve(__dirname, 'src/provider'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
};
