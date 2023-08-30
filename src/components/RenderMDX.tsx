import {MDXRemote} from "next-mdx-remote/rsc";

export default (props) => {
    return <article className='prose'>
        <MDXRemote {...props} />
    </article>
}