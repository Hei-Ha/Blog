import {MDXRemote} from "next-mdx-remote/rsc";
import {useMDXComponents} from "@src/components/MDXComponents";
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";


export default async (props) => {
    // const { source, ...rest } = props.data
    
    
    return <article className={`prose`} >
        <MDXRemote {...props} components={useMDXComponents} options={{
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight as any,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'warp'
                    }]
                ]
            }
        }} />
    </article>
}