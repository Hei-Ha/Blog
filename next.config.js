/** @type {import('next').NextConfig} */
// import createMDX from '@next/mdx'

const nextConfig = {
    swcMinify: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
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

// const MDXConfig = createMDX({
//     extension: /\.mdx?$/,
//     options: {
//         remarkPlugins: [],
//         rehypePlugins: [],
//     },
// })

export default nextConfig