import RenderMDX from '@src/components/RenderMDX';
import { getAPIUrl } from '@src/utils/utils'
import * as process from "process";

export default async ({params}) => {
    const { fileMsg } = params;
    console.log('this is node_env', process.env.NODE_ENV);
    
    const blogMsg = await fetch(
        `${getAPIUrl()}/frontEnd/api`,
        // `http/frontEnd/api`,
        {
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'post',
            body: JSON.stringify({
                category: fileMsg && fileMsg[0] ? fileMsg[0] : '',
                filename: fileMsg && fileMsg[1] ? fileMsg[1] : '',
            }),
        })
        .then(data => data.json())
        .catch((err) => {
            console.log(err);
        })
        
    
    return <div className='w-full h-full p-4 overflow-y-scroll bg-#fbfbfb rounded-xl'>
        <RenderMDX source={blogMsg?.content} />
    </div>
}