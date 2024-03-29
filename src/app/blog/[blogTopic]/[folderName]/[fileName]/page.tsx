import React from "react";
import RenderMDX from "@src/components/RenderMDX";
import Fetch from '@src/utils/services'


export default async ({params}) => {
    const fileContent = await Fetch.GET(`api/getFileContent?path=${params.blogTopic}/${params.folderName}/${params.fileName}`)
    
    return (
        <article className="prose dark:prose-invert my-10 sm:prose-sm sm:px-4">
            <RenderMDX sourceData={fileContent.content || ''}/>
        </article>
    );
};