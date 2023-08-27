import withMDX from '@next/mdx';

const nextConfig = {
    // webpack5: true,
    // webpack: (config) => {
    //     config.resolve.fallback = {
    //         fs: false,
    //         path: false,
    //     };
    //     return config;
    // },
    pageExtensions: ['ts', 'tsx', 'mdx'],
    experimental: {
        mdxRs: true,
    },
}

export default withMDX()(nextConfig);