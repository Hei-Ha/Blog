import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    experimental: {
        appDir: true,
        mdxRs: true,
    },
    reactStrictMode: true,
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
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
    },
})

export default MDXConfig(nextConfig);