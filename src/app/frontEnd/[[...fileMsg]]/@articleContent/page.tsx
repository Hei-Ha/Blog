import RenderMDX from '@src/components/RenderMDX';
import * as process from "process";

export default async ({params}) => {
    console.log(3)
    const { fileMsg } = params;
    
    const blogMsg = await fetch(
        `http://${process.env.API_URL}:3000/frontEnd/api`,
        {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'post',
            body: JSON.stringify({
                category: fileMsg && fileMsg[0] ? fileMsg[0] : '',
                filename: fileMsg && fileMsg[1] ? fileMsg[1] : '',
            }),
            cache: 'no-cache'
        })
        .then(data => data.json())
        .catch((err) => {
            console.log(err);
        });
    console.log(4)
    
    return <div className='w-full h-full p-4 overflow-y-scroll bg-#fbfbfb rounded-xl'>
        <RenderMDX source={blogMsg?.content} />
    </div>
}