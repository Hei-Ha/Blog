import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

export default async ({ sourceData }) => {
    const options = {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [
                [rehypeHighlight, {}] as any
            ],
        },
    };

    return <MDXRemote source={sourceData} options={options} />;
};
