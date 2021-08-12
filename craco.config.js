const path = require('path')
const pathResolve = (urlPath) => path.resolve(__dirname, urlPath)

module.exports = {
  // ...
  webpack: {
    alias: { '@': pathResolve('src') }
  }
};