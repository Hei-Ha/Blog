
import { MDXRemote } from 'next-mdx-remote/rsc'
export default ({sourceData}) => {

    return <MDXRemote source={sourceData} />
}