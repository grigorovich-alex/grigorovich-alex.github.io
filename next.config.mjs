/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export: the site is served by GitHub Pages, no server runtime.
  output: "export",
  // /experience → /experience/index.html, which GitHub Pages serves without redirects.
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
