/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: the site is served by GitHub Pages, no server runtime.
  output: "export",
  // /experience → /experience/index.html, which GitHub Pages serves without redirects.
  trailingSlash: true,
  images: { unoptimized: true },
  // Two root layouts (en at /, ru at /ru/) need one 404 page shared by both.
  experimental: { globalNotFound: true },
};

export default nextConfig;
