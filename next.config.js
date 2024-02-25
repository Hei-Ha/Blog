import withMDX from '@next/mdx'
import rehypeHighlight from "rehype-highlight";

/** @type {import('next').NextConfig} */

const nextConfig = {
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.wangchuang.space',
                port: '',
                pathname: '/Images/Blogs/**',
            }
        ],
    },
}

const MDXConfig = withMDX({
    extension: /\.(md|mdx)?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight],
        providerImportSource: "@mdx-js/react",
    },
})

export default MDXConfig(nextConfig);