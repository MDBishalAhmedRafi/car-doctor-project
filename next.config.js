/** @type {import('next').NextConfig} */
const nextConfig = { 
                images: {
    remotePatterns: [new URL("https://avatars.githubusercontent.com/**")],
  },
};

export default nextConfig;