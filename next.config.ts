import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  images:{
    domains:[
      "ik.imagekit.io"
    ]
  }
};

export default nextConfig;
