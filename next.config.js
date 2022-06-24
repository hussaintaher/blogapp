/** @type {import('next').NextConfig} */
require('dotenv').config() 

const nextConfig = {
  env: { // Follow this pattern to use variables  
    API_URL: process.env.API_URL,
    APP_URL: process.env.APP_URL,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
