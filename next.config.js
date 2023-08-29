import withMDX from '@next/mdx';

const nextConfig = {
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