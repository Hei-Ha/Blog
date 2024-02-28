import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import { useMDXComponents } from '@src/app/components/RenderMDX/mdx-components';
import * as CustomComponents from './components'

export default async ({ sourceData }) => {
    const options = {
        mdxOptions: {
            remarkPlugins: [],
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
