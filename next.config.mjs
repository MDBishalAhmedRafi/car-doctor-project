/** @type {import('next').NextConfig} */
const nextConfig = { 
                images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // replace with your image host
      },
    ],
  },
};

export default nextConfig;