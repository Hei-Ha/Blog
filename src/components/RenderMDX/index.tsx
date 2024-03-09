import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import remarkFrontmatter from 'remark-frontmatter';
import { useMDXComponents } from '@src/components/RenderMDX/mdx-components';
import * as CustomComponents from './components'


export default async ({ sourceData }) => {
    const options = {
        mdxOptions: {
            remarkPlugins: [
                remarkFrontmatter,
            ],
            rehypePlugins: [
                [rehypeHighlight, {}] as any
            ],
        },
    };

    return <MDXRemote
        source={sourceData}
        options={options}
        components={useMDXComponents({
            ...CustomComponents,
        })}
    />;
};
