import querystring from 'querystring';
import {MDXRemote} from "next-mdx-remote/rsc";

export default async ({ params, searchParams}) => {
    // fetch URl: http://localhost:3000/articles/1/api?param=world&name=zhangsan&age=18
    
    const getFileContentUrl = `http://localhost:3000/articles/${params.id}/api?${querystring.encode(searchParams)}`;
    const blogMessage = await fetch(getFileContentUrl).then(data => data.json() );
    
    return <div className={'exclude'}>
        <MDXRemote source={blogMessage.fileContent.content} />
    </div>
}