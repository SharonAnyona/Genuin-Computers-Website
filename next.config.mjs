/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 enables static export
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
