import withMDX from '@next/mdx'


export default withMDX()({
    distDir: 'dist',
    experimental: {
        mdxRs: true
    }
})