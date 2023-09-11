import {MDXRemote} from "next-mdx-remote/rsc";
import {useMDXComponents} from "@src/components/MDXComponents";
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Button } from '@nextui-org/button';
import remarkHtml from 'remark-html';


export default async (props) => {
    // const { source, ...rest } = props.data
    
    return <article
        // className={`prose lgScreens:prose smScreens:prose-sm pt-2`}
        className='markdown-body'
    >
        <MDXRemote
            {...props}
            components={useMDXComponents({Button})}
            options={{
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [remarkHtml],
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