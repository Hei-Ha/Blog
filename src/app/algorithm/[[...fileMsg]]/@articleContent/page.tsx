import RenderMDX from '@src/components/RenderMDX';
import { getAPIUrl } from '@src/utils/utils'


export default async ({params}) => {
    const { fileMsg } = params;
    
    const blogMsg = await fetch(
        `${getAPIUrl()}/algorithm/api`,
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
        .then(data => data.json());
    
    return <div className='w-full h-full p-4 overflow-y-scroll bg-#ffffff'>
        <RenderMDX source={blogMsg?.content} />
        {/*<RemarkMDX source={blogMsg?.content} />*/}
    </div>
}