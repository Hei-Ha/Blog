import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXList } from '@/utils/utils.client'
import {BlogsContentList} from "@/app/articles/constantType";
import MetadataCard from '@/components/MetadataCard';


const RenderMDX = (props) => {
    return props.map((item) => {
        return <MDXRemote source={item} />
    })
}


export default async () => {
    const data = await fetch('http://localhost:3000/articles/api');
    const blogsContentList: BlogsContentList[] = await data.json();
    
    return <div>
        <MDXList
            RenderMDX={RenderMDX(blogsContentList)}
        />
        {
            blogsContentList.map((item, index) => {
                return <MetadataCard
                    key={index}
                    content={item.content}
                    metadata={item.data}
                />
            })
        }
        
    </div>
}