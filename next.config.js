/** @type {import('next').NextConfig} */

// import { withContentlayer } from "next-contentlayer";
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = withContentlayer(nextConfig);

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "user-images.githubusercontent.com",
      "images.unsplash.com",
      "localhost:3000",
    ],
  },
});
