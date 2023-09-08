import withMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkPrism from 'remark-prism';

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {
        appDir: true,
        mdxRs: true,
    },
    // Optionally, add any other Next.js config below
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.wangchuang.space',
                port: '',
                pathname: '/Images/Blogs/**',
            }
        ],
    },
}

const MDXConfig = withMDX({
    extension: /\.(md|mdx)?$/,
    options: {
        remarkPlugins: [remarkGfm, remarkPrism],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
    },
})



// Merge MDX config with Next.js config
export default MDXConfig(nextConfig);
