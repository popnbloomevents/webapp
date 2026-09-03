import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Client-supplied imagery is already web-ready. Serving it directly also
    // avoids relying on a runtime image transformer in the Sites worker.
    unoptimized: true,
  },
};

export default nextConfig;
