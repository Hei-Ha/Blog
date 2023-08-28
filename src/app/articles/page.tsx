import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXList } from '@/utils/utils.client'


const RenderMDX = (props) => {
    return props.map((item) => {
        return <MDXRemote source={item} />
    })
}


export default async () => {
    const data = await fetch('http://localhost:3000/articles/api');
    const blogsContentList = await data.json();
    console.log(blogsContentList);
    
    return <div>
        <MDXList
            RenderMDX={RenderMDX(blogsContentList)}
        />
    </div>
}