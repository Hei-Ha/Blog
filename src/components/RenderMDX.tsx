import {MDXRemote} from "next-mdx-remote/rsc";

export default (props) => {
    // const { source, ...rest } = props.data
    
    return <article className='prose'>
        <MDXRemote {...props} />
    </article>
}