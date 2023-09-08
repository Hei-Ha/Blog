import {MDXRemote} from "next-mdx-remote/rsc";
import {useMDXComponents} from "@src/components/MDXComponents";
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Button } from '@nextui-org/button';


export default async (props) => {
    // const { source, ...rest } = props.data
    
    return <article className={`prose lgScreens:prose smScreens:prose-sm pt-2`} >
        <MDXRemote
            {...props}
            components={useMDXComponents({Button})}
            options={{
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