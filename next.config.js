/** @type {import('next').NextConfig} */
const nextConfig = { 
                images: {
    remotePatterns: [{hostname: "**"}]
  }
};

export default nextConfig;

// remotePatterns: [
//       {
//         hostname: "res.cloudinary.com",
//       },
//       {
//         hostname: "res.cloudinary.com",
//       },
//     ]