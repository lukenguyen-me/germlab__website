/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "germlab.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
