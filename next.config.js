import withMDX from '@next/mdx';

const nextConfig = {
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
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        mdxRs: true,
    },
}

const MDXConfig = {
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
}

const result = Object.assign(
    {},
    nextConfig,
    MDXConfig,
)

export default withMDX()(result);