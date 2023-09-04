import RenderMDX from '@src/components/RenderMDX';

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
                category: fileMsg && fileMsg[0] ? fileMsg[0] : '',
                filename: fileMsg && fileMsg[1] ? fileMsg[1] : '',
            })
        })
        .then(data => data.json());
    
    return <div className='w-full h-full p-4 overflow-y-scroll'>
        <RenderMDX source={blogMsg?.content} />
    </div>
}