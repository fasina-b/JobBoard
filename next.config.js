/** @type {import('next').NextConfig} */
const nextConfig = {}
const withTM = require('next-transpile-modules')(['bcrypt']);

module.exports = withTM({
  // ... other configurations
});
module.exports = nextConfig
