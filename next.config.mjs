/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow remote images later if needed
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  }
};
export default nextConfig;
