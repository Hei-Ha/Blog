import RenderMDX from '@src/components/RenderMDX';

export default async ({params}) => {
    console.log(3)
    const { fileMsg } = params;
    
    const blogMsg = await fetch(
        'https://127.0.0.1:3000/frontEnd/api',
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
        .then(data => data.json())
        .catch((err) => {
            console.log(err);
        });
    console.log(4)
    
    return <div className='w-full h-full p-4 overflow-y-scroll bg-#fbfbfb rounded-xl'>
        <RenderMDX source={blogMsg?.content} />
    </div>
}