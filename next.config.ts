import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_DISABLE_DEBUG_PANEL: 'true',
  },
};

export default nextConfig;

