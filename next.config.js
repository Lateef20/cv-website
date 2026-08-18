/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  async redirects() {
    return [
      // 301 redirect: force all HTTP traffic to HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://lateefjawando.com/:path*",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;