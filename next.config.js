/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'www.hollywoodreporter.com',
      'cdn.pocket-lint.com',
      'static.wikia.nocookie.net',
      'rickandmortyapi.com',
    ],
  },
};

module.exports = nextConfig;
