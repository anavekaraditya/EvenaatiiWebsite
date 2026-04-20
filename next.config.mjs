/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/weddings",
        destination: "/#story",
        permanent: true
      },
      {
        source: "/corporate",
        destination: "/#services",
        permanent: true
      },
      {
        source: "/social-events",
        destination: "/#services",
        permanent: true
      },
      {
        source: "/design-studio",
        destination: "/#services",
        permanent: true
      },
      {
        source: "/portfolio",
        destination: "/#portfolio",
        permanent: true
      },
      {
        source: "/contact",
        destination: "/book",
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
