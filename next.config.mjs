import nextMDX from "@next/mdx";
import rehypePrism from "rehype-prism";

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
  images: {
    domains: ["github.com", "lh3.googleusercontent.com"],
  },
};

export default withMDX({
  ...nextConfig,
  env: {
    NEWS_API_KEY: process.env.NEWS_API_KEY,
  },
});
