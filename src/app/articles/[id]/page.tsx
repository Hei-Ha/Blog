import querystring from 'querystring';
import RenderMDX from '@src/components/RenderMDX';

export default async ({ params, searchParams}) => {
    // fetch URl: http://localhost:3000/articles/1/api?param=world&name=zhangsan&age=18
    
    const getFileContentUrl = `http://localhost:3000/articles/${params.id}/api?${querystring.encode(searchParams)}`;
    const blogMessage = await fetch(getFileContentUrl).then(data => data.json() );
    
    return <div className={'exclude'}>
        <RenderMDX source={blogMessage.fileContent.content}/>
    </div>
}