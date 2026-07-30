/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "solyontechnologies.com" }],
        destination: "https://www.solyontechnologies.com/en",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "solyontechnologies.com" }],
        destination: "https://www.solyontechnologies.com/:path*",
        permanent: true,
      },
      { source: "/", destination: "/en", permanent: true },
      { source: "/ecosystem", destination: "/en/truck-risk-os", permanent: true },
      { source: "/technology", destination: "/en/technology", permanent: true },
      { source: "/impact", destination: "/en/evidence", permanent: true },
      { source: "/about", destination: "/en/company", permanent: true },
      { source: "/store", destination: "/en", permanent: true },
      { source: "/investors", destination: "/en/investors", permanent: true },
      { source: "/contact", destination: "/en/contact", permanent: true },
      { source: "/press", destination: "/en/company", permanent: true },
      { source: "/legal", destination: "/en/privacy", permanent: true },
      { source: "/thankyou", destination: "/en/contact", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
