import RenderMDX from '@src/components/RenderMDX';
import matter from "gray-matter";

export default async ({params}) => {
    const { fileMsg } = params;
    
    const blogMsg = await fetch(
        'http://localhost:3000/frontEnd/api',
        {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'post',
            body: JSON.stringify({
                category: fileMsg[0],
                filename: fileMsg[1],
            })
        })
        .then(data => data.json());
    
    return <div className='p-4'>
        <RenderMDX source={blogMsg.content} />
    </div>
}